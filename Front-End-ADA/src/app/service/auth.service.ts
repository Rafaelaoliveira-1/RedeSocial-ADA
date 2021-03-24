import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }
  token = {
    headers:new HttpHeaders().set('Authorization',environment.token)
    }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuario/entrar', userLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuario/cadastrar', usuario)
  }

  getAllUser(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:8080/usuario',this.token)
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuario/${id}`)
  }

  putUser(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('http://localhost:8080/usuario', usuario)
  }

  adm() {
    let ok: boolean = false

    if (environment.tipo == 'adm'){
      ok = true
    }
    return ok
  }

}
