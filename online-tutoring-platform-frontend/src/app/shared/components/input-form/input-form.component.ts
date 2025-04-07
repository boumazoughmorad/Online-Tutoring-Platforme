import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-input-form',
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {
  formGroup = input.required<FormGroup>();
  controlName = input.required<string>();
  label = input<string>();
  isreadOnly = input<boolean>(false);
  textRightInput = input<string>();
  isSelectUnit = input<boolean>(false);
  dataunitSelect = input<any[]>([]);
  isOpenSelectUnit :boolean = false;
  type = input<string>('text');
  classInput = input<string>('');
  @Input() unitSelected: string = '';

  @Input() isrequired?: boolean = true;
  @Input() placeholder?: string = '';
  @Input() errorMessage?: string = 'Ce champ est obligatoire';
  @Input() value : any = null;
  @Input() rows : number = 5;

  isInvalidAndTouchedOrDirty(formControl: FormControl) {
    return formControl.invalid && (formControl.touched || formControl.dirty);
  }

  selectUnit(item: string) {
    this.unitSelected = item
    this.isOpenSelectUnit = false; 
  }
}
