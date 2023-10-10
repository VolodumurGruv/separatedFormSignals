import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-delivery-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss'],
})
export class DeliveryFormComponent {
  @Input() parentForm!: FormGroup;
}
