# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2020-06-23 10:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spider', '0017_auto_20200623_1012'),
    ]

    operations = [
        migrations.AlterField(
            model_name='searchresult',
            name='facebook',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='searchresult',
            name='twitter',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='searchresult',
            name='youtube',
            field=models.CharField(max_length=1024, null=True),
        ),
    ]
