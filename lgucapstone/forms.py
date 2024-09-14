from django import forms

class OrdinanceResolutionForm(forms.Form):
    title = forms.CharField(max_length=255)
    year = forms.IntegerField()
    date_proposed = forms.DateField()
    date_approved = forms.DateField()
    author = forms.CharField(max_length=255)
    file_type = forms.ChoiceField(choices=[
        ('resolution', 'Resolution'),
        ('ordinance', 'Ordinance'),
    ])
    document = forms.FileField()
