import { CommonModule } from '@angular/common';
import { Component, signal, effect, computed, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'first',
  template: `
    {{ count() }}
    <button (click)="increase()">Increase</button>
    <button (click)="decrease()">Decrease</button>

    {{ total()() | number : '1.2-2' }}
  `,
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class FirstComponent {
  count = signal<number>(0);

  constructor() {
    effect(() => {
      console.log(this.count());
    });
  }

  onChange(value: number) {
    this.count.set(value);
  }

  increase() {
    this.count.update(() => this.count() + 1);
  }
  decrease() {
    this.count.update(() => this.count() - 1);
  }

  total(): Signal<number> {
    const totalCount = computed(() => this.count() * 1.2);
    return totalCount;
  }
}
