from django.core.management.base import BaseCommand
from usersapp.models import Users
from TODOapp.models import ToDo, Project
from random import randint


class Command(BaseCommand):
    def handle(self, *args, **options):
        Users.objects.all().delete()

        admin = Users(username='admin', password='0000', first_name='admin', last_name='admin', email='admin@admin.ru',
                      is_superuser=True)
        admin.save()

        for i in range(1, 10):
            user = Users(username=f'user{i}', password='0000', first_name=f'TestName{i}', last_name=f'TestSurname{i}',
                         email=f'user{i}@user.ru')
            user.save()

        Project.objects.all().delete()
        for i in range(1, 10):
            user = Users.objects.get(username=f'user{randint(1, 9)}')
            project = Project.objects.create(name=f'Project{i}', link='google.ru')
            project.users.add(user)

        ToDo.objects.all().delete()
        for i in range(1, 10):
            user = Users.objects.get(username=f'user{randint(1, 9)}')
            project = Project.objects.get(name=f'Project{randint(1, 9)}')
            ToDo.objects.create(project=project, text=f'some text for todo{i}', user=user)
