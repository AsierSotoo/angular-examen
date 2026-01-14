import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ // Este servicio es global y se crea automáticamente
  providedIn: 'root',
})
export class User {

  private apiurl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) {}


  // Vista general
  getUsers() {
    return this.http.get(this.apiurl) // Llama a la API, sin ejecutar nada aún
  }

  // Vista detallada
  getUserById(id: number) {
    return this.http.get(`${this.apiurl}/${id}`); // Llama a la API, pero buscando el id que sea
    
  }
}

