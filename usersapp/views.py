from rest_framework.decorators import permission_classes
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import Users
from .permission import AdminOnly, ManagerOnly
from .serializers import UsersModelsSerializers


class UserTestModel(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelsSerializers

    def get_permissions(self):
        if self.action in ('update', 'partial_update',):
            permission_classes = [IsAuthenticated, ManagerOnly]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]


class UsersListModel(mixins.ListModelMixin,
                     mixins.RetrieveModelMixin,
                     viewsets.GenericViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelsSerializers
    render_classes = [JSONRenderer, BrowsableAPIRenderer]
    permission_classes = [IsAuthenticated]


class UsersChangeModel(mixins.UpdateModelMixin,
                       mixins.CreateModelMixin,
                       mixins.RetrieveModelMixin,
                       viewsets.GenericViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelsSerializers
    render_classes = [JSONRenderer, BrowsableAPIRenderer]
    permission_classes = [IsAuthenticated, AdminOnly]
