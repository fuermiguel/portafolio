import { InformacionService } from './services/informacion.service';
import { ProductosService } from './services/productos.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _is:InformacionService,
              public _ps:ProductosService ){

  }
   
}
