import { Component, signal } from '@angular/core';
import { DragonballCharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  name = signal(' krillin ');
  power = signal(1000);
  Characters = signal<DragonballCharacter[]>([
    { id: 1, name: 'Goku', power: 9800 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 8000 },
    { id: 4, name: 'Piccolo', power: 700 },
    { id: 5, name: 'yamcha', power: 500 },
  ]);

  addCharacter() {
   if (this.name() && this.power() || this.power() > 0) {
      const newCharacter: DragonballCharacter = {
        id: this.Characters().length + 1,
        name: this.name().trim(),
        power: this.power(),
      };
      this.Characters.update((list) => [...list, newCharacter]);
      this.name.set('');
      this.power.set(0);
    }
   }
}
