from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings

from wagtail.core import urls as wagtail_urls
from wagtail.admin import urls as wagtailadmin_urls
from wagtail.documents import urls as wagtaildocs_urls
from api.api import coloring_router, cms_api_router

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cms/', include(wagtailadmin_urls)),
    path('documents/', include(wagtaildocs_urls)),
    path('api/', include(coloring_router.urls)),
    path('api2/', cms_api_router.urls),
# For anything not caught by a more specific rule above, hand over to
# Wagtail's serving mechanism
    re_path(r'', include(wagtail_urls)),

  #  path('api/v2', api_router.urls),
    #path('', include('custom_comments.urls')),

]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)