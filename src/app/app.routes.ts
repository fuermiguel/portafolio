import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent, 
    PortafolioComponent, 
    PortafolioItemComponent } from './components/index.paginas';

const routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent},
    { path: 'producto', component: PortafolioItemComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' },

];


//Se usa forRoot porque es la primera vez que se llama y viene con el servicio de router.
//Si el servicio ya se ha llamado, se usa forChild, que contiene las rutas pero no el servicio.
export const app_routing = RouterModule.forRoot(routes, { useHash:true});
//El hash es el contenido de una url que parte desde el signo de numero(#).