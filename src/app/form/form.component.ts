import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'form-app',
  templateUrl: './form.component.html',
  styleUrls: ['./../app.component.scss', './form.component.scss']
})
export class FormComponent {
  title = 'wiz-test';
  movie = '';

  form = this.fb.group({
    firstName: [''],
    lastName: [''],
    cpf: [''],
    date: [''],
    email: ['', Validators.email],
    checkbox: [''],
    cep: [''],
    address: [''],
    city: [''],
    country: ['Brasil'],
    states: ['df'],
    tel: [''],
    firstNameCompanion: [''],
    lastNameCompanion: [''],
    cpfCompanion: [''],
    dateCompanion: [''],
    emailCompanion: ['', Validators.email]
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ){ }
  
  ngOnInit() {
    this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=2408c59e550f3bb77a3a41701c535cec&language=pt-BR&page=1").subscribe((result) => {
      this.movie = result["results"][0];
    });    
  }

  getCep() {
    if (this.form.get('cep').valid) {
      this.http.get(`https://viacep.com.br/ws/${this.form.get("cep").value}/json/`).subscribe((result) => {
        console.log(result);

        this.form.get('address').setValue(`${result["logradouro"]} ${result["complemento"]} ${result["bairro"]}`);
        this.form.get('city').setValue(result["localidade"]);
        this.form.get('states').setValue(result["uf"].toLowerCase());
        this.form.get('tel').setValue(result["ddd"]);
      });
    }
  }
}
