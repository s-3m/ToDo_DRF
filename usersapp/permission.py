from rest_framework.permissions import BasePermission


class AdminOnly(BasePermission):
    def has_permission(self, request, view):
        # import pdb; pdb.set_trace()
        return request.user.user_post == 'Administrator'


class DeveloperOnly(BasePermission):
    def has_permission(self, request, view):
        return request.user.user_post == 'Developer'


class ManagerOnly(BasePermission):
    def has_permission(self, request, view):
        return request.user.user_post == 'Manager'
