# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2020-06-23 10:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spider', '0016_auto_20200622_1412'),
    ]

    operations = [
        migrations.AlterField(
            model_name='searchresult',
            name='address',
            field=models.CharField(max_length=512, null=True),
        ),
        migrations.AlterField(
            model_name='searchresult',
            name='email',
            field=models.CharField(max_length=512, null=True),
        ),
        migrations.AlterField(
            model_name='searchresult',
            name='facebook',
            field=models.CharField(max_length=512, null=True),
        ),
        migrations.AlterField(
            model_name='searchresult',
            name='twitter',
            field=models.CharField(max_length=512, null=True),
        ),
        migrations.AlterField(
            model_name='searchresult',
            name='youtube',
            field=models.CharField(max_length=512, null=True),
        ),
    ]