# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2021-05-31 11:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('spider', '0021_requestdetailcount'),
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=128, unique=True)),
            ],
        ),
    ]
