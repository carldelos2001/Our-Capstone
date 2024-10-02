from django import forms

class CalendarDateInput(forms.DateInput):
    input_type = 'date'
    format = '%Y-%m-%d'

class OrdinanceResolutionForm(forms.Form):
    title = forms.CharField(max_length=255)
    year = forms.CharField(max_length=4)
    date_proposed = forms.DateField(
        widget=CalendarDateInput()
    )
    date_approved = forms.DateField(
        widget=CalendarDateInput()
    )
    author = forms.CharField(max_length=255)
    file_type = forms.ChoiceField(choices=[
        ('resolution', 'Resolution'),
        ('ordinance', 'Ordinance'),
    ])
    document = forms.FileField()