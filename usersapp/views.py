from rest_framework import viewsets
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.permissions import IsAuthenticated

from .models import Users
from .permission import AdminOnly, ManagerOnly, DeveloperOnly
from .serializers import UsersModelsSerializers


class UsersModel(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelsSerializers
    render_classes = [JSONRenderer, BrowsableAPIRenderer]
    # permission_classes = [IsAuthenticated]

    # def get_permissions(self):
    #     if self.action in ('create', 'update', 'partial_update', 'destroy'):
    #         permission_classes = [ManagerOnly | AdminOnly]
    #     else:
    #         permission_classes = [IsAuthenticated]
    #     return [permission() for permission in permission_classes]
