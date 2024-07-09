import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Amigo {
  id: number;
  nombre: string;
  imagenperfil: string;
}

@Injectable({
  providedIn: 'root'
})
export class AmigosService {
  private apiUrl = 'http://localhost:3000/amigos'; // URL de tu db.json

  constructor(private http: HttpClient) {}

  getAmigos(): Observable<Amigo[]> {
    return this.http.get<Amigo[]>(this.apiUrl);
  }

  addAmigo(amigo: Amigo): Observable<Amigo> {
    return this.http.post<Amigo>(this.apiUrl, amigo);
  }

  deleteAmigo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateAmigo(amigo: Amigo): Observable<Amigo> {
    return this.http.put<Amigo>(`${this.apiUrl}/${amigo.id}`, amigo);
  }
}
