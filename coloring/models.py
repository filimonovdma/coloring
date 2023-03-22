from django.db import models
from wagtail.core.models import Page
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.snippets.models import register_snippet
from taggit.models import Tag as TaggitTag

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
    content_panels = Page.content_panels + [
        ImageChooserPanel("header_image"),
        ]
    
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

@register_snippet
class ColoringTag(TaggitTag):
    class Meta:
        proxy = True