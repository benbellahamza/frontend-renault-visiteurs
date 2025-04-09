import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AgentDeSaisie {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  login: string;
}

@Injectable({
  providedIn: 'root'
})
export class AgentDeSaisieService {
  private baseUrl = 'http://localhost:8085/api/agents';

  constructor(private http: HttpClient) {}

  getAll(): Observable<AgentDeSaisie[]> {
    return this.http.get<AgentDeSaisie[]>(this.baseUrl);
  }

  supprimer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
