from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from TODOapp.models import Project, ToDo
from TODOapp.serializer import ProjectSerializerBase, ProjectModelSerializer, ToDoModelSerializer, \
    SimpleToDoModelSerializer
from rest_framework.pagination import LimitOffsetPagination

from usersapp.permission import ManagerOnly, AdminOnly
from .filters import ProjectFilter, ToDoFilter


class ProjectLimitPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitPagination
    filter_class = ProjectFilter

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return ProjectModelSerializer
        return ProjectSerializerBase

    def get_permissions(self):
        if self.action in ('create', 'update', 'partial_update', 'destroy'):
            permission_classes = [AdminOnly | ManagerOnly]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]


class ToDoLimitPagination(LimitOffsetPagination):
    default_limit = 20


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = ToDoLimitPagination
    filter_class = ToDoFilter

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return ToDoModelSerializer
        return SimpleToDoModelSerializer

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(self.get_queryset(), many=True)
        instance.is_active = False
        instance.save()
        return Response(serializer.data)
