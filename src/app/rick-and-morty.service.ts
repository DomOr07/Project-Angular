
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result, RootGetAllCharacters } from './interfaces/rickandmorty';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  public getRickAndMorty(): Observable<RootGetAllCharacters> {
    return this.http.get<RootGetAllCharacters>("https://rickandmortyapi.com/api/character");
  }

  public postRickAndMorty(body: Result): Observable<boolean> {
    return this.http.post<boolean>("https://rickandmortyapi.com/api/character", body);
  }

  public filterCharacters(name: string, id: string, gender: string): Observable<RootGetAllCharacters> {
    let params = new HttpParams();
    if (name) {
      params = params.set('name', name);
    }
    if (id) {
      params = params.set('id', id);
    }
    if (gender) {
      params = params.set('gender', gender);
    }

    return this.http.get<RootGetAllCharacters>("https://rickandmortyapi.com/api/character", { params });
  }
}
