from rest_framework import serializers
from api.fields import TagField
from coloring.models import ColoringPage, ColoringCategory, Tag

class ColoringPageSerializer(serializers.ModelSerializer):
    api_tags = TagField(source='tags')
    class Meta:
        model = ColoringPage
        fields = (
            'id',
            'slug',
            'title',
            'api_tags',
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