import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './login/registrer.component';

// Rutas
import {APP_ROUTES} from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrerComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
