import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  input,
  OnInit,
  OnChanges,
  output,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-select-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './select-form.component.html',
  styleUrl: './select-form.component.css',
})
export class SelectFormComponent implements OnInit, OnChanges {
  formGroup = input.required<FormGroup>();
  ControlName = input.required<string>();
  label = input<string>();
  required = input<boolean>(true);
  dataSelect = input<any[]>([]);
  isOpen: boolean = false;
  selectedItem = this.dataSelect()[0];
  selected = output<string>(); 
  unit  = input<string>('name');
   
  constructor(private eRef: ElementRef) {}

  ngOnInit() {
 
    
    this.selectedItem = this.dataSelect()[0];
  

    const initialValue = this.formGroup().get(this.ControlName())?.value;
    if (initialValue) {
      this.updateSelected(initialValue);
    }
  }

  ngOnChanges() {
    const currentValue = this.formGroup().get(this.ControlName())?.value;
    if (currentValue) {
      this.updateSelected(currentValue);
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  private updateSelected(uuid: string) {
    const found = this.dataSelect().find((item) => item.uuid === uuid);
    if (found) {
      this.selectedItem = found;
      this.selected.emit(this.selectedItem.uuid); // Emit the selected client ID
    }
  }

  ToggeleSelectItem(item: any) {
    this.selectedItem = item;
    this.formGroup().get(this.ControlName())?.setValue(item.uuid);
    this.selected.emit(item.uuid); // Emit the selected client ID
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}