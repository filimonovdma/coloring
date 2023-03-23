# Generated by Django 4.1.7 on 2023-03-23 19:29

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.contrib.taggit
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ('taggit', '0005_auto_20220424_2025'),
        ('coloring', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ColoringPageTag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_object', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='coloring_page_tags', to='coloring.coloringpage')),
                ('tag', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='%(app_label)s_%(class)s_items', to='taggit.tag')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='PostPageColoringCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('coloring_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='colorin_pages', to='coloring.coloringcategory')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='categories', to='coloring.coloringpage')),
            ],
            options={
                'unique_together': {('page', 'coloring_category')},
            },
        ),
        migrations.DeleteModel(
            name='ColoringTag',
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
            ],
            options={
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('taggit.tag',),
        ),
        migrations.AddField(
            model_name='coloringpage',
            name='tags',
            field=modelcluster.contrib.taggit.ClusterTaggableManager(blank=True, help_text='A comma-separated list of tags.', through='coloring.ColoringPageTag', to='taggit.Tag', verbose_name='Tags'),
        ),
    ]