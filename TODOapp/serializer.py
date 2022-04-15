from django.db.models import Model
from rest_framework.serializers import ModelSerializer, StringRelatedField
from usersapp.serializers import UsersModelsSerializers, SimpleUserSerializer

from TODOapp.models import Project, ToDo


class ProjectModelSerializer(ModelSerializer):
    users = SimpleUserSerializer(many=True)

    class Meta:
        model = Project
        fields = ['id', 'name', 'users', 'link']


class ProjectSerializerBase(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class SimpleProjectModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ['name']


class ToDoModelSerializer(ModelSerializer):
    user = SimpleUserSerializer()
    project = SimpleProjectModelSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'


class SimpleToDoModelSerializer(ModelSerializer):
    class Meta:
        model = ToDo
        fields = '__all__'


