from rest_framework.viewsets import ModelViewSet
from .models import Users
from .serializers import UsersModelsSerializers


class UsersModelViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelsSerializers
