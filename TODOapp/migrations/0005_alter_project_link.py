# Generated by Django 4.0.2 on 2022-04-06 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TODOapp', '0004_remove_todo_user_todo_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='link',
            field=models.CharField(default=None, max_length=564, null=True),
        ),
    ]
