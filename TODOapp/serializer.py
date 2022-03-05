from rest_framework.serializers import ModelSerializer, StringRelatedField
from usersapp.serializers import UsersModelsSerializers

from TODOapp.models import Project, ToDo


class ProjectModelSerializer(ModelSerializer):
    users = UsersModelsSerializers(many=True)

    class Meta:
        model = Project
        fields = ['name', 'users', 'link']


class ToDoModelSerializer(ModelSerializer):
    user = StringRelatedField()
    project = ProjectModelSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'
