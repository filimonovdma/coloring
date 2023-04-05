from rest_framework import serializers
from api.fields import TagField, CategoryField, GradeField
from coloring.models import ColoringPage, ColoringCategory, Tag, ColoringGrade
from wagtail.images.api.fields import ImageRenditionField

class ColoringPageSerializer(serializers.ModelSerializer):
    tags = TagField()
    header_image = ImageRenditionField("max-1000x800")
    categories = CategoryField()
    grades = GradeField()

    class Meta:
        model = ColoringPage
        fields = ( 
            'title', 
            'header_image',     
            'slug',
            'tags',
            'categories',
            'grades',
            )
        

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ColoringCategory
        fields = (
            'id',
            'slug',
            'name',
        )
class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = (
            'id',
            'slug',
            'name',
        )

class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ColoringGrade
        fields = (
            'id',
            'slug',
            'name',
        )