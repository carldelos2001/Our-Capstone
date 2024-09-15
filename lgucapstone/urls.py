from django.urls import path
from . import views



urlpatterns = [
    path('', views.lgucapstone, name='lgucapstone'),
    path('signup', views.signup, name='signup'),
    path('login', views.login, name='login'),
    path('home', views.home, name='home'),
    path('user_ordinance', views.user_ordinance, name='user_ordinance'),
    path('user_resolution', views.user_resolution, name='user_resolution'),
    path('user_services', views.user_services, name='user_services'),
    path('user_announcement', views.user_announcement, name='user_announcement'),

    path('admin_login', views.admin_login, name='admin_login'),
    path('admin_dash', views.admin_dash, name='admin_dash'),
    path('account_settings', views.account_settings, name='account_settings'),
    path('add_ordinance_resolution', views.add_ordinance_resolution, name='add_ordinance_resolution'),
    path('admin_report', views.admin_report, name='admin_report'),
    path('admin_announcement', views.admin_announcement, name='admin_announcement'),
]