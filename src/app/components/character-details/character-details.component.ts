import { Character, CharacterService } from 'src/app/character.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  character$: Observable<Character> | undefined;
  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.character$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.characterService.getCharacter(params.get('id'))
      )
    );
  }
}
