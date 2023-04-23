from rest_framework import routers
from .views import CategorySet, ColoringPageSet, TagSet, GradeSet

from wagtail.api.v2.router import WagtailAPIRouter
from wagtail.api.v2.views import PagesAPIViewSet
from wagtail.documents.api.v2.views import DocumentsAPIViewSet
from wagtail.images.api.v2.views import ImagesAPIViewSet

from django.core.exceptions import MultipleObjectsReturned
from django.shortcuts import redirect
from django.urls import reverse, path

# Below is custom router which has some advanced feature not implemented by Wagtail
coloring_router = routers.DefaultRouter()
coloring_router.register(r"posts", ColoringPageSet)
coloring_router.register(r"categories", CategorySet)
coloring_router.register(r"tags", TagSet)
coloring_router.register(r'grade', GradeSet)



class CustomPagesAPIViewSet(PagesAPIViewSet):
     def detail_view(self, request, pk=None, slug=None):
        param = pk
        if slug is not None:
            self.lookup_field = 'slug'
            param = slug
        return super().detail_view(request, param)
     
     @classmethod
     def get_urlpatterns(cls):
        """
        This returns a list of URL patterns for the endpoint
        """
        return [
            path('', cls.as_view({'get': 'listing_view'}), name='listing'),
            path('<int:pk>/', cls.as_view({'get': 'detail_view'}), name='detail'),
            path('<slug:slug>/', cls.as_view({'get': 'detail_view'}), name='detail'),
            path('find/', cls.as_view({'get': 'find_view'}), name='find'),
        ]
    
cms_api_router = WagtailAPIRouter("wagtailapi")
cms_api_router.register_endpoint("pages", CustomPagesAPIViewSet)
cms_api_router.register_endpoint("images", ImagesAPIViewSet)
cms_api_router.register_endpoint("documents", DocumentsAPIViewSet)