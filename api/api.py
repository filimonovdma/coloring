from rest_framework import routers
from .views import CategorySet, ColoringPageSet, TagSet

from wagtail.api.v2.router import WagtailAPIRouter
from wagtail.api.v2.views import PagesAPIViewSet
from wagtail.documents.api.v2.views import DocumentsAPIViewSet
from wagtail.images.api.v2.views import ImagesAPIViewSet

# Below is custom router which has some advanced feature not implemented by Wagtail
coloring_router = routers.DefaultRouter()
coloring_router.register(r"posts", ColoringPageSet)
coloring_router.register(r"categories", CategorySet)
coloring_router.register(r"tags", TagSet)


cms_api_router = WagtailAPIRouter("wagtailapi")

cms_api_router.register_endpoint("pages", PagesAPIViewSet)
cms_api_router.register_endpoint("images", ImagesAPIViewSet)
cms_api_router.register_endpoint("documents", DocumentsAPIViewSet)