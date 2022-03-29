"""ToDo_DRF URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from usersapp.views import UsersModel
from TODOapp.views import ProjectModelViewSet
from TODOapp.views import ToDoModelViewSet
from rest_framework.authtoken import views



router = DefaultRouter()

# router.register('users', UsersListModel)
router.register('users', UsersModel)
router.register('projects', ProjectModelViewSet)
router.register('todo', ToDoModelViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),

    path('auth/', include('djoser.urls')),
    # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair_view'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh_view'),

    path('api-token-auth/', views.obtain_auth_token, name='token'),
    path('api/', include(router.urls)),

]
