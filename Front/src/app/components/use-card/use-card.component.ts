import { User } from './../../models/user.model';
import { UserGetService } from './../../services/user-get.service';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-use-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './use-card.component.html',
  styleUrl: './use-card.component.scss'
})
export class UseCardComponent {
  users: User[] = [];

  //chamar meu serviço e armazenar o valor dele numa variavel
  constructor(private userGetService: UserGetService){
     this.obterUsuariosCadastrados()
  }

  obterUsuariosCadastrados(){
    this.userGetService.obterUsers()
    .subscribe(users => this.users = users);
  }
}
