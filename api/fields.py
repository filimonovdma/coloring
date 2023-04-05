from rest_framework.fields import Field

class TagField(Field):
    def to_representation(self, tags):
        try:
            return [
                {"name": tag.name, "slug": tag.slug, "id": tag.id}
                for tag in tags.all()
                ]
        except Exception:
            return []
        


class GradeField(Field):
    def to_representation(self, grades):
        try:
            return [
                {"name": grade.coloring_grade.name,
                 "slug": grade.coloring_grade.slug,
                 "id": grade.coloring_grade.id}
                   for grade in grades.all()
                ]
        except Exception:
            return []


class CategoryField(Field):
    def to_representation(self, categories):
        try:
            return [
                {"name": categories.coloring_category.name, 
                 "slug": categories.coloring_category.slug,
                   "id": categories.coloring_category.id}
                   for categories in categories.all()
                ]
        except Exception:
            return []