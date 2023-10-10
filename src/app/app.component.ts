import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first/first.component';
import { SparatedFormComponent } from './components/sparated-form/sparated-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FirstComponent, SparatedFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'signals';
}
