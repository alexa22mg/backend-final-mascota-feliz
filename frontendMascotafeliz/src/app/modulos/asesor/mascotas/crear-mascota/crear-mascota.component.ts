import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { modeloMascota } from 'src/app/Servicio/modelos/modelo.mascota';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit{

  fgValidador: FormGroup= this.fb.group({
    'nombre':['',[Validators.required]],
    'especie':['',[Validators.required]],
    'estado':['',[Validators.required]],
    'comentario':['',[Validators.required]],
    'foto':['',[Validators.required]],
  });

  constructor(private fb: FormBuilder, 
    private servicioMascota:MascotasService,
    private router:Router){}
  ngOnInit(): void {
    
  }
 GuardarMascota(){
  let nombre = this.fgValidador.controls["nombre"].value;
  let especie= this.fgValidador.controls["especie"].value;
  let estado = this.fgValidador.controls["estado"].value;
  let comentario = this.fgValidador.controls["comentario"].value;
  let foto = this.fgValidador.controls["foto"].value;
  let m = new modeloMascota();
  m.Nombre = nombre;
  m.Especie= especie;
  m.Estado = estado;
  m.Comentario=comentario;
  m.Foto=foto;
  this.servicioMascota.CrearMascota(m).subscribe((datos: modeloMascota)=>{
    alert("Datos almacenados correctamente");
    this.router.navigate(['/asesor/listar-mascota']);

  },(error:any)=>{
    alert(" Error en el almacenamiento de datos")

  })
 } 

}
