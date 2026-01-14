import { Component, signal } from '@angular/core'; //Trae cosas de angular (lo básico para crear...)

@Component({ // Es un metadato (todo lo de dentro son propiedades del componente)
  selector: 'app-root', // define el nombre de la etiqueta HTML que representa a este componente
  templateUrl: './app.html', // le dice a Angular qué archivo HTML es la plantilla de este componente.
  standalone: false, // No standalone
  styleUrl: './app.css' // le dice a Angular qué archivo CSS es la plantilla de este componente.
})
export class App {  // Permite exportar el componente (es la clase del componente)
  protected readonly title = signal('usuarios-app'); 
}
