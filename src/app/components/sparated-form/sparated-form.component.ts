import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InfoFormComponent } from './info-form/info-form.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';

@Component({
  selector: 'app-sparated-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InfoFormComponent,
    DeliveryFormComponent,
  ],
  templateUrl: './sparated-form.component.html',
  styleUrls: ['./sparated-form.component.scss'],
})
export class SparatedFormComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  public parentForm = this.fb.group({
    address: [''],
    phone: [''],
    name: [''],
    surname: [''],
  });

  onSubmit() {
    console.log(this.parentForm.value);
  }
}
