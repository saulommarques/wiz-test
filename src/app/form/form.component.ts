import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-app',
  templateUrl: './form.component.html',
  styleUrls: ['./../app.component.scss', './form.component.scss']
})
export class FormComponent {
  title = 'wiz-test';

  form = this.fb.group({
    firstName: [''],
    lastName: [''],
    cpf: [''],
    date: [''],
    email: [''],
    checkbox: [''],
  });

  constructor(private fb: FormBuilder) { }
}
