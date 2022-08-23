from django.template import Library

register = Library()


@register.filter
def func_filter(s):
    return s if s else ''
