import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UserList } from './components/user-list/user-list';
import { UserDetail } from './components/user-detail/user-detail';
import { RouterLink } from '@angular/router';
import { from } from 'rxjs';

@NgModule({  // Aquí empieza la configuración del módulo
  declarations: [ //Aquí van los componentes propios del módulo
    App, UserList, UserDetail // componente raiz
  ],
  imports: [ // Aquí van los módulos que usa la app
    BrowserModule, // navegador
    AppRoutingModule, // rutas
    HttpClientModule //HTTP
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App] // indica que carga primero
})
export class AppModule { }
