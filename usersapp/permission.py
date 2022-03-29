from django.contrib.auth.models import Permission
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import BasePermission


class AdminOnly(BasePermission):
    def has_permission(self, request, view):
        try:
            return request.user.user_post == 'Administrator'
        except:
            raise PermissionDenied


class DeveloperOnly(BasePermission):
    def has_permission(self, request, view):
        try:
            return request.user.user_post == 'Developer'
        except:
            raise PermissionDenied


class ManagerOnly(BasePermission):
    def has_permission(self, request, view):
        try:
            return request.user.user_post == 'Manager'
        except:
            raise PermissionDenied
