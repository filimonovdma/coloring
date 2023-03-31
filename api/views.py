from rest_framework import viewsets
from coloring.models import ColoringCategory, ColoringPage, Tag
from .serializers import CategorySerializer, ColoringPageSerializer, TagSerializer

class ColoringPageSet(viewsets.ModelViewSet):
    serializer_class = ColoringPageSerializer
    queryset = ColoringPage.objects.all()
    http_method_names = ["get"]
class CategorySet(viewsets.ModelViewSet):
    queryset = ColoringCategory.objects.all()
    serializer_class = CategorySerializer
    http_method_names = ["get"]
class TagSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    http_method_names = ["get"]