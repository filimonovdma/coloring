from rest_framework import routers
from .views import CategorySet, ColoringPageSet, TagSet

# Below is custom router which has some advanced feature not implemented by Wagtail
coloring_router = routers.DefaultRouter()
coloring_router.register(r"posts", ColoringPageSet)
coloring_router.register(r"categories", CategorySet)
coloring_router.register(r"tags", TagSet)