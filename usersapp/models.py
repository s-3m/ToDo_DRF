from uuid import uuid4

from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class Users(AbstractUser):
    post_choices = (
        ('Manager', 'Manager'),
        ('Developer', 'Developer'),
        ('Administrator', 'Administrator'),
        ('User', 'User'),
    )

    uid = models.UUIDField(primary_key=True, default=uuid4)
    username = models.CharField(verbose_name='Ваш ник', max_length=64, blank=False, unique=True)
    first_name = models.CharField(verbose_name='Имя', max_length=64, blank=False)
    last_name = models.CharField(verbose_name='Фамилия', max_length=64, blank=False)
    birth_date = models.PositiveIntegerField(verbose_name='Дата рождения', null=True)
    email = models.EmailField(verbose_name='email', blank=False, unique=True)
    user_post = models.CharField(verbose_name='Должность', max_length=15, choices=post_choices, blank=True)
