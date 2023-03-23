import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modeloUsuario } from '../Servicio/modelos/modelo.usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  EditarUsuario(u: modeloUsuario) {
    throw new Error('Method not implemented.');
  }
 
  url ='http://localhost:3000';

  constructor(private http: HttpClient) { }

ObtenerRegistros(): Observable<modeloUsuario[]> {
   return this.http.get<modeloUsuario[]>(`${this.url}/usuarios`)
 }  

 ObtenerRegistrosporid(id: string): Observable<modeloUsuario> {
  return this.http.get<modeloUsuario>(`${this.url}/usuarios/${id}`)
} 
  
 CrearUsuario(usuario: modeloUsuario):Observable<modeloUsuario>{
  return this.http.post<modeloUsuario>(`${this.url}/usuarios`,usuario,{
    headers: new HttpHeaders({
      'Authorizacion': `Bearer $(this.token)` 
    })
  })
 }
 
 ActualizarUsuario(usuario: modeloUsuario):Observable<modeloUsuario>{
  return this.http.put<modeloUsuario>(`${this.url}/usuarios/${usuario.id}`,usuario,{
    headers: new HttpHeaders({
      'Authorizacion': `Bearer $(this.token)` 
    })
  })
 }
 EliminarUsuario(id:string):Observable<any> {
  return this.http.delete(`${this.url}/usuarios/${id}`,{
    headers: new HttpHeaders({
      'Authorizacion': `Bearer $(this.token)` 
    })
  })
 }
}


