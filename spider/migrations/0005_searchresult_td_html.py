# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2020-06-17 06:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('spider', '0004_auto_20200617_1449'),
    ]

    operations = [
        migrations.AddField(
            model_name='searchresult',
            name='td_html',
            field=models.CharField(max_length=128, null=True),
        ),
    ]
