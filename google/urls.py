"""google URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from spider import views as spider_view
from django.views import static
from django.conf import settings
urlpatterns = [
    url(r'^static/(?P<path>.*)$', static.serve, {'document_root': settings.STATIC_ROOT}, name='static'),
    url(r'^admin/', admin.site.urls),
    url(r'^google_map/', spider_view.google),
    url(r'^bigemap/', spider_view.bigemap),
    url(r'^login/', spider_view.login),
    url(r'^offline/', spider_view.offline),
    url(r'^logout/', spider_view.logout),
    url(r'^close_page/', spider_view.close_page),
    url(r'^login_check/', spider_view.login_check),
    url(r'^search_word/', spider_view.search_place_text),
    url(r'^search_word2/', spider_view.search_place_text2),
    url(r'^search_detail_by_ids/', spider_view.search_detail_by_ids),
    url(r'^extra_search/', spider_view.extra_search),
    url(r'^get_email/', spider_view.get_email),
    url(r'^query_from_db/', spider_view.query_from_db),
    url(r'^query_db_data/', spider_view.query_db_data),
    url(r'^check_status/', spider_view.check_status),
    url(r'^logout_all_cuser/', spider_view.logout_all_cuser),
    url(r'^test/', spider_view.test),
    url(r'^test2/', spider_view.test2),
    url(r'^$', spider_view.bigemap),
]
