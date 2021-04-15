from django.contrib import admin

# Register your models here.

from api.models import Company, Vacancy
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'city', 'address')
admin.site.register(Vacancy)
