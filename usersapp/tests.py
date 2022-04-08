import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer, Mixer
from django.contrib.auth.models import User
from usersapp.views import UsersModel
from TODOapp.views import ProjectModelViewSet, ToDoModelViewSet
from usersapp.models import Users
from TODOapp.models import Project, ToDo


class TestUserModelViewSet(TestCase):

    def setUp(self):
        pass

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users/')
        view = UsersModel.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_list_admin(self):
        client = APIClient()
        Users.objects.create_superuser('admin', 'a@a.ru', 'aa123')
        client.login(username='admin', password='aa123')
        response = client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_detail_auth(self):
        user = Users.objects.create(username='testUser', first_name='Test', last_name='test', email='s@s.ru',
                                    user_post='Administrator')
        client = APIClient()
        Users.objects.create_superuser('admin', 'a@a.ru', 'aa123')
        client.login(username='admin', password='aa123')
        response = client.get(f'/api/users/{user.uid}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_manager(self):
        Users.objects.create_user(username='testUser',
                                  password='0000',
                                  first_name='Test',
                                  last_name='test',
                                  email='s@s.ru',
                                  user_post='Manager')
        client = APIClient()
        client.login(username='testUser', password='0000')
        response = client.post('/api/users/', {'username': 'test',
                                               'password': '0000',
                                               'first_name': 'ftest',
                                               'last_name': 'ltest',
                                               'email': 'sss@d.ru',
                                               'user_post': 'Developer',
                                               }, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class TestProjectModelViewSet(TestCase):

    def setUp(self):
        pass

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_manager(self):
        user = Users.objects.create_user(username='testUser',
                                         password='0000',
                                         first_name='Test',
                                         last_name='test',
                                         email='s@s.ru',
                                         user_post='Manager')

        client = APIClient()
        client.login(username='testUser', password='0000')
        response = client.post('/api/projects/', {'name': 'test',
                                                  'link': 'rtyu.ru',
                                                  'users': [user.uid]}, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class TestTodoModelVewSet(APITestCase):

    def test_put_detail(self):
        todo = mixer.blend(ToDo)
        admin = Users.objects.create_user(username='testUser',
                                          password='0000',
                                          first_name='Test',
                                          last_name='test',
                                          email='s@s.ru',
                                          user_post='Manager ')
        self.client.login(username='testUser', password='0000')

        response = self.client.put(f'/api/todo/{todo.id}/', {'project': todo.project.id,
                                                             'text': 'aawa',
                                                             'user': todo.user.uid})
        print(todo.text)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        todo = ToDo.objects.get(id=todo.id)
        self.assertEqual(todo.text, 'aawa')
