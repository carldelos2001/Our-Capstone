from django.urls import path
from . import views
from .views import send_otp
from .views import verify_otp
from .views import verify_login_otp
from .views import send_login_otp
from .views import  get_user_info
from .views import update_user_info


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
    path('admin_attendance', views.admin_attendance, name='admin_attendance'),

    path('send-otp/', send_otp, name='send_otp'),
    path('verify-otp/', verify_otp, name='verify_otp'),

    path('send_login_otp/', send_login_otp, name='send_login_otp'),
    path('verify_login_otp/', verify_login_otp, name='verify_login_otp'),
    path('send_forgot_password_otp/', views.send_forgot_password_otp, name='send_forgot_password_otp'),
    path('reset_password_with_otp/', views.reset_password_with_otp, name='reset_password_with_otp'),

    path('user_forgotpass/', views.user_forgotpass, name='user_forgotpass'),

    path('admin_promanage', views.admin_promanage, name='admin_promanage'),
    path('get_user_info/', get_user_info, name='get_user_info'),
    path('update_user_info/', update_user_info, name='update_user_info'),
]