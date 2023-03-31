from rest_framework.fields import Field

class TagField(Field):
    def to_representation(self, tags):
        try:
            return [
                {"name": tag.name, "slug": tag.slug, "id": tag.id}for tag in tags.all()
                ]
        except Exception:
            return []