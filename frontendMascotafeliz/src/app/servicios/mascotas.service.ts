import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modeloMascota } from '../Servicio/modelos/modelo.mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  url ='http://localhost:3000';

  constructor(private http: HttpClient) { }

ObtenerMascota(): Observable<modeloMascota[]> {
   return this.http.get<modeloMascota[]>(`${this.url}/mascotas`)
 }  

 ObtenerMascotaporid(id: string): Observable<modeloMascota> {
  return this.http.get<modeloMascota>(`${this.url}/mascotas/${id}`)
} 
  
 CrearMascota(mascota: modeloMascota):Observable<modeloMascota>{
  return this.http.post<modeloMascota>(`${this.url}/mascotas`,mascota,{
    headers: new HttpHeaders({
      'Authorizacion': `Bearer $(this.token)` 
    })
  })
 }
 
 ActualizarMascota(mascota: modeloMascota):Observable<modeloMascota>{
  return this.http.put<modeloMascota>(`${this.url}/mascotas/${mascota.id}`,mascota,{
    headers: new HttpHeaders({
      'Authorizacion': `Bearer $(this.token)` 
    })
  })
 }
 EliminarMascota(id:string):Observable<any> {
  return this.http.delete(`${this.url}/mascotas/${id}`,{
    headers: new HttpHeaders({
      'Authorizacion': `Bearer $(this.token)` 
    })
  })
 }
}
