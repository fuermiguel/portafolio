import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {

  productos:any[] =[];
  cargando_productos:boolean = true;//Indica que está cargando y cuando esté cargado pasa a tfalse.

  constructor( private http:Http) { 
    this.cargar_productos();
  }

  public cargar_productos(){

    this.cargando_productos = true

      this.http.get('https://paginaweb-208e9.firebaseio.com/productos_idx.json')
      .subscribe(res => {
        console.log(res.json());

       // setTimeout(()=>{
          this.cargando_productos = false;
          this.productos = res.json();
       // }, 1500)
       
      });
  }
}
