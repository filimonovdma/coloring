from django.db import models
from modelcluster.fields import ParentalKey
from modelcluster.tags import ClusterTaggableManager
from taggit.models import Tag as TaggitTag
from taggit.models import TaggedItemBase
from wagtail.admin.edit_handlers import (
FieldPanel,
FieldRowPanel,
InlinePanel,
MultiFieldPanel,
PageChooserPanel,
StreamFieldPanel,
)
from wagtail.core.models import Page
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.snippets.edit_handlers import SnippetChooserPanel
from wagtail.snippets.models import register_snippet
class HomePage(Page):
    description = models.CharField(max_length=255, blank=True,)
    content_panels = Page.content_panels + [FieldPanel("description", classname="full")]

class ColoringPage(Page):
    body = models.CharField(max_length=255, blank=True,)
    header_image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
        )
    tags = ClusterTaggableManager(through="ColoringPageTag", blank=True)

    content_panels = Page.content_panels + [
        ImageChooserPanel('header_image'),
        FieldPanel('body'),
        FieldPanel('tags'),
        InlinePanel("categories", label="category"),
        ]
class PostPageColoringCategory(models.Model):
    page = ParentalKey(
        "ColoringPage",
        on_delete=models.CASCADE,
        related_name="categories"
)
    coloring_category = models.ForeignKey(
        'ColoringCategory',
        on_delete=models.CASCADE,
        related_name='colorin_pages'
    )
    panels = [
        SnippetChooserPanel('coloring_category'),
    ]
    class Meta:
        unique_together =('page', 'coloring_category')
@register_snippet
class ColoringCategory(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, max_length=80)
    panels = [
        FieldPanel("name"),
        FieldPanel("slug"),
        ]
    def __str__(self):
        return self.name
    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"
class ColoringPageTag(TaggedItemBase):
    content_object = ParentalKey("ColoringPage", related_name="coloring_page_tags")
@register_snippet
class Tag(TaggitTag):
    class Meta:
        proxy = True

######