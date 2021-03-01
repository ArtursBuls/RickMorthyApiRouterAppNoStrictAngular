import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharacterService } from 'src/app/character.service';

@Component({
  selector: 'app-all-chars',
  templateUrl: './all-chars.component.html',
  styleUrls: ['./all-chars.component.scss'],
})
export class AllCharsComponent implements OnInit {
  characters$: Observable<Character[]>;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characters$ = this.characterService.getAllChars();
  }
}
