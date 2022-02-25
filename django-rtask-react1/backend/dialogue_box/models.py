from django.db import models

# Create your models here.

class dialogue_box(models.Model):
    title = models.CharField(max_length=120)
    comment = models.TextField()

    def _str_(self):
        return self.title