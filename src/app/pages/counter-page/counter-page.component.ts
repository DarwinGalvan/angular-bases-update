import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {

  counter: number = 10;
  counterSignal = signal(10);

  constructor() {}

  increaseBy(value: number): void {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
