from datetime import datetime

from django.db import models
from usersapp.models import Users


class Project(models.Model):
    name = models.CharField(max_length=64, blank=False)
    link = models.CharField(max_length=564, default=None, null=True)
    users = models.ManyToManyField(Users)

    def __str__(self):
        return self.name


class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField(max_length=512)
    create = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
