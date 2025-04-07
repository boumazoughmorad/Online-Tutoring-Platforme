import {  NgFor} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Availability, Price, Specialty } from '../../../../../domains/tutor/model/tutor.model';
import { SelectFormComponent } from '../../../../../shared/components/select-form/select-form.component';





@Component({
  selector: 'app-filter-tutors',
  imports: [NgFor,FormsModule, ReactiveFormsModule, SelectFormComponent],
  templateUrl: './filter-tutors.component.html',

})
export class ListTutorFilterSidebarComponent implements OnInit {
  form!: FormGroup;
  specialties!: Specialty[];
  availability!: Availability[];
  introductoryPrices!: Price;
  limitPrices!: Price;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,

  ) {
    this.form = this.fb.group({
      specialty: this.fb.array([]),
      priceOption: [null],
      availability: [null],
    });
  }

  ngOnInit(): void {
    this.loadSpecialties();
    this.loadAvailability();
    this.loadPrices();

  }

  onCheckboxChange(event: any) {


    const specialtiesArray: FormArray = this.form.get('specialty') as FormArray;

    if (event.target.checked) {
      specialtiesArray.push(this.fb.control(event.target.value));
    } else {
      const index = specialtiesArray.controls.findIndex(x => x.value === event.target.value);
      if (index >= 0) {
        specialtiesArray.removeAt(index);
      }
    }
  }
  loadSpecialties(): void {
    this.isLoading = true;
    this.specialties = [
      { uuid: "1", name: 'Anglais des affaires' },
      { uuid: "2", name: 'De la conversation' },
      { uuid: "3", name: 'Préparation aux examens' }
    ];
    this.isLoading = false;
  }

  loadAvailability(): void {
    this.isLoading = true;
    this.availability = [
      { uuid: '1', value: "À tout moment" },
      { uuid: '2', value: "Matin (8h-12h)" },
      { uuid: '3', value: "Après-midi (12h-17h)" },
      { uuid: '4', value: "Soir (17h-22h)" },
    ];
    this.isLoading = false;
  }

  loadPrices(): void {
    this.isLoading = true;

    this.introductoryPrices = { uuid: "1", service: '$5', amount: 5 }
    this.limitPrices = { uuid: "2", service: '$50+', amount: 50}

    this.form.get('priceOption')?.setValue(this.introductoryPrices.amount);

    this.isLoading = false;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.isLoading = true;
      console.log(this.form.value);

          this.isLoading = false;

    }
  }
}
