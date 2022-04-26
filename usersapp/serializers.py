from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import Users


class UsersModelsSerializers(HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ('uid', 'username', 'password', 'user_post', 'first_name', 'last_name', 'email')


class SimpleUserSerializer(ModelSerializer):
    class Meta:
        model = Users
        fields = ['username']


class UsersModelSerializerWithStuff(ModelSerializer):
    class Meta:
        model = Users
        fields = ('uid', 'username', 'is_staff', 'is_superuser')
