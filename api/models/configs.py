# -*- coding: utf-8 -*-

from django.db import models

# Create your models here.
class Config(models.Model):
    name = models.CharField(max_length=255, verbose_name='名称')
    version = models.CharField(max_length=16, verbose_name='版本号')
    content = models.TextField(verbose_name='内容')
    create_time = models.DateTimeField(verbose_name="创建时间", auto_now_add=True)
    create_by = models.CharField(max_length=32, verbose_name='创建人')
    update_time = models.DateTimeField(verbose_name="更新时间", auto_now=True)
    update_by = models.CharField(max_length=32, verbose_name='更新人')

    class Meta:
        unique_together = ('name', 'version')
