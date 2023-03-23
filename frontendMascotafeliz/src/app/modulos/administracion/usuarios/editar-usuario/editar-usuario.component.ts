import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { modeloUsuario } from 'src/app/Servicio/modelos/modelo.usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  id:string ='';

  fgValidador: FormGroup= this.fb.group({
    'id':['',[Validators.required]],
    'cedula':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'apellido':['',[Validators.required]],
    'telefono':['',[Validators.required]],
    'correo':['',[Validators.required]],
    'rol':['',[Validators.required]]
    
  });
 
  constructor(private fb: FormBuilder, 
    private servicioUsuario:UsuarioService,
    private router:Router,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario(); 
  }
  BuscarUsuario(){
    this.servicioUsuario.ObtenerRegistrosporid(this.id).subscribe((datos:modeloUsuario)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["cedula"].setValue(datos.Cedula);
      this.fgValidador.controls["nombre"].setValue(datos.Nombre);
      this.fgValidador.controls["apellido"].setValue(datos.Apellido);
      this.fgValidador.controls["telefono"].setValue(datos.Telefono);
      this.fgValidador.controls["correo"].setValue(datos.Correo);
      this.fgValidador.controls["rol"].setValue(datos.Rol);
    })
  }

  EditarUsuario(){
  let cedula = this.fgValidador.controls["cedula"].value;
  let nombre = this.fgValidador.controls["nombre"].value;
  let apellido = this.fgValidador.controls["apellido"].value;
  let telefono = this.fgValidador.controls["telefono"].value;
  let correo = this.fgValidador.controls["correo"].value;
  let rol = this.fgValidador.controls["rol"].value;
  let u = new modeloUsuario();
  u.Cedula=cedula;
  u.Nombre=nombre;
  u.Apellido=apellido;
  u.Telefono=telefono;
  u.Correo=correo;
  u.Rol=rol;
  u.id = this.id;
  this.servicioUsuario.ActualizarUsuario(u).subscribe((datos: modeloUsuario)=>{
    alert("producto Actualizado");
    this.router.navigate(['/administracion/listar-usuario']);

  },(error:any)=>{
    alert(" Error en la actualizacion del producto")

  })
 } 
}
