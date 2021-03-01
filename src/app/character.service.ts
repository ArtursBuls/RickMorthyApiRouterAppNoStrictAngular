import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

export interface Character {
  id: number;
  gender: string;
  name: string;
  status: string;
  species: string;
  image: string;
  location: {
    name: string;
  };
  created: string;
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  //we`ll use chars only from page 21th to reduce amount of chars...
  apiCharsUrl = 'https://rickandmortyapi.com/api/character/?page=21';
  apiSingleChar = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  getAllChars(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiCharsUrl).pipe(pluck('results'));
  }

  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(this.apiSingleChar + id).pipe();
  }
}
