# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2021-03-12 11:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spider', '0018_auto_20200623_1017'),
    ]

    operations = [
        migrations.AlterField(
            model_name='searchresult',
            name='phone',
            field=models.CharField(max_length=128, null=True),
        ),
    ]