from django_filters import rest_framework as filters
from .models import Project, ToDo


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')
    link = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name', 'link']


class ToDoFilter(filters.FilterSet):
    project__name = filters.CharFilter(lookup_expr='contains')
    text = filters.CharFilter(lookup_expr='contains')
    create = filters.CharFilter(lookup_expr='contains')
    user__username = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = ToDo
        fields = ['project', 'text', 'create', 'user']
