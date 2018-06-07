import { Routes, RouterModule } from '@angular/router';

// Componentes

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegistrerComponent } from './login/registrer.component';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent},
    { path: 'registrer', component: RegistrerComponent},
    { path: '**', component: NopagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
