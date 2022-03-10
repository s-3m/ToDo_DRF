from django.db.models import Model
from rest_framework.serializers import ModelSerializer, StringRelatedField
from usersapp.serializers import UsersModelsSerializers

from TODOapp.models import Project, ToDo


class ProjectModelSerializer(ModelSerializer):
    users = UsersModelsSerializers(many=True)

    class Meta:
        model = Project
        fields = ['name', 'users', 'link']


class SimpleProjectModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ['name']


class ToDoModelSerializer(ModelSerializer):
    user = StringRelatedField()
    project = SimpleProjectModelSerializer()

    class Meta:
        model = ToDo
        exclude = ['id']
