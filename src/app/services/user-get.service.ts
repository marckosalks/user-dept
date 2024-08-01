import { environment } from './../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserGetService {
  private url = environment.api;

  //passando injecao de dpendencias
  constructor(private httpClient: HttpClient) { }

  //instanciar um metodo get
  obterUsers(){
    return this.httpClient.get<User[]>(`${this.url}users`)
  }

}
