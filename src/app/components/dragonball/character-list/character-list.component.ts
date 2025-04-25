import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DragonballCharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
Characters = input.required<DragonballCharacter[]>();
listName = input.required<string>();
}
