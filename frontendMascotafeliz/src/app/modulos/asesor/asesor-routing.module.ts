import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';

const routes: Routes = [
  {
    path:'crear-mascota',
    component: CrearMascotaComponent

  },
  {
    path:'listar-mascota',
    component:BuscarMascotaComponent
  },
  {
    path:'editar-mascota',
    component: EditarMascotaComponent
    
  },
  {
    path:'eliminar-mascota',
    component: EliminarMascotaComponent
    
  },
  {
    path:'buscar-mascota',
    component: BuscarMascotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
