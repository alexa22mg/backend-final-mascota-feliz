import { Component } from '@angular/core';
import { modeloMascota } from 'src/app/Servicio/modelos/modelo.mascota';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent {

  listadoRegistrosMascotas: modeloMascota[]=[];
  constructor( private mascotaServicio:MascotasService){}
  
  
  ngOnInit(): void {
    this.ObtenerListadoMascotas();
   
  }
  ObtenerListadoMascotas(){
    this.mascotaServicio.ObtenerMascota().subscribe((datos: modeloMascota[])=>{
      this.listadoRegistrosMascotas = datos;
    })

  }
}

