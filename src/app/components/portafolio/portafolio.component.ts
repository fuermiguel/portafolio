import { ProductosService } from '../../services/productos.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent  {

  //Pasando el servicio por el constructor, ya lo tendremos disponible
   constructor(private _ps:ProductosService){

   }

}
