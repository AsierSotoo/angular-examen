import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../services/user';


@Component({
  selector: 'app-user-detail',
  standalone: false,
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})


export class UserDetail implements OnInit {

  // Aquí guardamos el id que viene en la URL (/user/3)
  userId!: number;

  // Aquí guardamos el usuario que nos devuelve la API
  user: any;

  // Inyectamos:
  // - ActivatedRoute → para leer el id
  // - UserService → para pedir datos a la API
  constructor(
    private route: ActivatedRoute,
    private userService: User
  ) {}

  // ngOnInit se ejecuta cuando el componente ya está listo
  ngOnInit(): void {

    // 1️⃣ Leemos el id desde la URL
    // snapshot = "foto" de la ruta actual
    // paramMap.get('id') devuelve un string
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    // 2️⃣ Usamos el id para pedir el usuario concreto a la API
    this.userService.getUserById(this.userId).subscribe((data: any) => {

      // 3️⃣ Guardamos el usuario recibido
      this.user = data;

      // Angular se encarga automáticamente de actualizar el HTML
    });
  }
}
