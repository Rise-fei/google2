# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2020-06-22 14:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('spider', '0015_auto_20200618_1534'),
    ]

    operations = [
        migrations.AlterField(
            model_name='searchresult',
            name='address',
            field=models.CharField(max_length=256, null=True),
        ),
        migrations.AlterField(
            model_name='searchresult',
            name='email',
            field=models.CharField(max_length=256, null=True),
        ),
    ]
