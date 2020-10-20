import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-app',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss', './../app.component.scss']
})
export class FormComponent {
  title = 'wiz-test';

  form = this.fb.group({
    firstName: [''],
    lastName: [''],
  });

  constructor(private fb: FormBuilder) { }
}
