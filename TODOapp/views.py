from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from TODOapp.models import Project, ToDo
from TODOapp.serializer import ProjectModelSerializer, ToDoModelSerializer
from rest_framework.pagination import LimitOffsetPagination
from .filters import ProjectFilter, ToDoFilter


class ProjectLimitPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitPagination
    filter_class = ProjectFilter


class ToDoLimitPagination(LimitOffsetPagination):
    default_limit = 20


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = ToDoLimitPagination
    filter_class = ToDoFilter

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(self.get_queryset(), many=True)
        instance.is_active = False
        instance.save()
        return Response(serializer.data)
