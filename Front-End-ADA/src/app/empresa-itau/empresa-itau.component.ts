
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-empresa-itau',
  templateUrl: './empresa-itau.component.html',
  styleUrls: ['./empresa-itau.component.css']
})

export class EmpresaItauComponent implements OnInit {
  user:Usuario = new Usuario()
  postagem:Postagem = new Postagem()
  tema:Tema = new Tema()

  listaPostagem:Postagem[]
  listaTema:Tema[]
  listaUsuario:Usuario[]

  tipoTema: string
  tipoPostagem: string
  contaPostagem:number
  contaConexoes:number

  idTema:number
  idUser = environment.id
  idcheck:number

  nomeCompleto = environment.nomeCompleto
  foto = environment.foto
  cargo = environment.cargo
  id = environment.id
  link = environment.link

  constructor (

    private router: Router,
    private TemaService: TemaService,
    private PostagemService: PostagemService,
    private auth: AuthService, 
    private alertas: AlertasService

  ) { }

  ngOnInit() {
    
    window.scroll(0,0)

    if (environment.token == '') {
      this.alertas.showAlertInfo('Sua sessão expirou!')
      this.router.navigate(['/entrar'])
    }
    this.findByIdUser()
    this.findAllUsuario()
  }

  findByIdUser(){
    this.auth.getByIdUser(this.id).subscribe((resp: Usuario)=>{
      this.user = resp
      this.contaPostagem = this.listaPostagem.length
    })
  }
  findAllUsuario(){
    this.auth.getAllUser().subscribe((resp:Usuario[])=>{
      this.listaUsuario = resp
      this.contaConexoes = (this.listaUsuario.length - 1)
      this.listaUsuario.splice(environment.id-1,1)
      this.listaUsuario = this.listaUsuario.slice(0,6)
    })
  }
  
}
