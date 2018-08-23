import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/internal/operators';

export class EarlyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState( control: FormControl | null, form: FormGroupDirective | NgForm | null ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && control.dirty);
  }
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: [ './input.component.css' ]
})
export class InputComponent implements OnInit {

  surveyForm: FormGroup;
  earlyErrorStateMacher = new EarlyErrorStateMatcher();
  countries$: any[];

  majorTechList = [
    {
      name: '前端',
      items: [ 'HTML', 'CSS', 'JavaScript' ]
    },
    {
      name: '後端',
      items: [ 'C#', 'NodeJs', 'Go' ]
    }
  ];

  constructor( private httpClient: HttpClient ) {
    // 初值，数组表单验证
    this.surveyForm = new FormGroup({
      basicQuestions: new FormGroup({
        intro: new FormControl('', [ Validators.required, Validators.minLength(10) ]),
      }),
      country: new FormControl('', [ Validators.required ]),
      majorTech: new FormControl('')
    });
  }

  ngOnInit() {
    this.httpClient.get<any[]>('assets/countries.json').subscribe(response => {
      this.countries$ = response;
    });
    this.surveyForm.get('country').valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(value => {
      console.log(value);
      this.httpClient.get<any[]>('assets/countries.json').subscribe(response => {
        this.countries$ = response.filter(item => {
          return item.name.indexOf(value) > -1;
        });
      });
    });
  }

  onSubmit() {
    console.log(this.surveyForm);
  }

  highlightFiltered( countryName: string ) {
    const inputCountry = this.surveyForm.get('country').value;
    return countryName.replace(inputCountry, `<span class="autocomplete-highlight">${inputCountry}</span>`);
  }

  displayCountry( country: any ) {
    if ( country ) {
      return `${country.name} / ${country.code}`;
    } else {
      return '';
    }
  }
}
