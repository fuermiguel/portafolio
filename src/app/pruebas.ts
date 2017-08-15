import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutComponent, 
    PortafolioComponent, 
    PortafolioItemComponent } from './components/index.paginas';

const routes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent},
    { path: 'producto', component: PortafolioItemComponent },
    { path: '**', pathMatch: 'full', redirectTo:'' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
