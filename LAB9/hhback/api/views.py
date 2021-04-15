import json

from django.shortcuts import render
from api.models import Company, Vacancy
from django.http.response import JsonResponse

from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            company = Company.objects.create(name=data['name'], description=data['description'], city=data['city'], address=data['address'])
        except Exception as e:
            return JsonResponse({'message': str(e)})
        
        return JsonResponse(company.to_json())

@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data['name']
        company.description = data['description']
        company.city = data['city']
        company.address = data['address']
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'deleted'}, status=204)
        

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id = vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    
    return JsonResponse(vacancy.to_json())

def company_vacancies(request, company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    
    vacancies = [vac.to_json() for vac in company.vacancies.all()]
    return JsonResponse(vacancies, safe=False)

def vacancy_topten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vac_json = [vac.to_json() for vac in vacancies]
    return JsonResponse(vac_json, safe=False)
