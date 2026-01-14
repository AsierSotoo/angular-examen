import { OnInit, Component } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {

  users: any[] = [];

  constructor(private userService: User) {}

  ngOnInit (): void {
    this.userService.getUsers() //Llamas al método del servicio
    .subscribe((data: any) => { // Te suscribes al observable 
      this.users = data; // Data son los datos de la API, en este caso lo guardas en this.users
    })
  }
}
