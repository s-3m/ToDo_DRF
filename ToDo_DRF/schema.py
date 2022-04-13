import graphene
from graphene_django import DjangoObjectType

from TODOapp.models import Project, ToDo
from usersapp.models import Users


class UserType(DjangoObjectType):
    class Meta:
        model = Users
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class Query(graphene.ObjectType):
    all_users = graphene.List(UserType)
    all_projects = graphene.List(ProjectType)
    all_todo = graphene.List(ToDoType)
    user_by_id = graphene.Field(UserType, uid=graphene.UUID(required=True))
    todo_by_username = graphene.List(ToDoType, username=graphene.String(required=False))

    def resolve_todo_by_username(self, info, username=None):
        todo = ToDo.objects.all()
        if username:
            todo = todo.filter(user__username=username)
            return todo
        return todo

    def resolve_user_by_id(self, info, uid):
        try:
            return Users.objects.get(uid=uid)
        except Users.DoesNotExist:
            return None

    def resolve_all_users(self, info):
        return Users.objects.all()

    def resolve_all_projects(self, info):
        return Project.objects.all()

    def resolve_all_todo(self, info):
        return ToDo.objects.all()

schema = graphene.Schema(query=Query)
