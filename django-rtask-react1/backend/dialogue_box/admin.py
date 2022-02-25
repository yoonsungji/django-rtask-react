from django.contrib import admin
from .models import dialogue_box

class dialogue_boxAdmin(admin.ModelAdmin):
    list_display = ('title','comment')

# Register your models here.

admin.site.register(dialogue_box, dialogue_boxAdmin)