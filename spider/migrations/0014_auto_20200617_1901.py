# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2020-06-17 11:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('spider', '0013_auto_20200617_1835'),
    ]

    operations = [
        migrations.AlterField(
            model_name='searchresult',
            name='type',
            field=models.CharField(max_length=512, null=True),
        ),
    ]
