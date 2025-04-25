import { effect, Injectable, signal } from '@angular/core';
import { DragonballCharacter } from '../interfaces/character.interface';

const loadFromLocalStorage = ():DragonballCharacter[] => {
  const characters = localStorage.getItem('dragonballCharacters');

  return characters ? JSON.parse(characters) : [];
  // Si no hay nada en localStorage, devuelve un array vacío
};

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  Characters = signal<DragonballCharacter[]>(loadFromLocalStorage());

  saveLocalStorage = effect(() => {
    localStorage.setItem(
      'dragonballCharacters',
      JSON.stringify(this.Characters())
    );    
  });
  // Guardar en localStorage

  addCharacter(character: DragonballCharacter) {
    this.Characters.update((List) => [...List, character]);
  }
  /**
   * Adds a new Dragonball character to the list of characters.
   *
   * @param character - The Dragonball character to be added. 
   *                     It should conform to the `DragonballCharacter` interface.
   */
}
