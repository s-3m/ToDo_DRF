from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer

from .models import Users
from .serializers import UsersModelsSerializers


class UsersModelViewSet(mixins.ListModelMixin,
                        mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin, viewsets.GenericViewSet):

    queryset = Users.objects.all()
    serializer_class = UsersModelsSerializers
    render_classes = [JSONRenderer, BrowsableAPIRenderer]