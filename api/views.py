from rest_framework import viewsets
from coloring.models import ColoringCategory, ColoringPage, Tag, ColoringGrade
from .serializers import CategorySerializer, ColoringPageSerializer, TagSerializer, GradeSerializer


class ColoringPageSet(viewsets.ModelViewSet):
    serializer_class = ColoringPageSerializer
    queryset = ColoringPage.objects.all()
    http_method_names = ["get"]
    lookup_field = 'slug'


class CategorySet(viewsets.ModelViewSet):
    queryset = ColoringCategory.objects.all()
    serializer_class = CategorySerializer
    http_method_names = ["get"]


class TagSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    http_method_names = ["get"]


class GradeSet(viewsets.ModelViewSet):
    queryset = ColoringGrade.objects.all()
    serializer_class = GradeSerializer
    http_method_names = ["get"]