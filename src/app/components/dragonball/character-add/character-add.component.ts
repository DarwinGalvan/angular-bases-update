import { Component, output, signal } from '@angular/core';
import { DragonballCharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal(' ');
  power = signal(0);

  newCharacter = output<DragonballCharacter>();

  addCharacter() {
    if ((!this.name() && !this.power()) || this.power() < 0) {
      console.log('Error en el nombre o el poder');
      return;
    }
    const newCharacter: DragonballCharacter = {
      // id: this.Characters().length + 1,
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
