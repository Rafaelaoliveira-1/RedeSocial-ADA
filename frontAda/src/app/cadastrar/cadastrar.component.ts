import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  nome = window.document.getElementById('nome')
  validaNome: string
  validaSenha: string
  usuario: Usuario = new Usuario
  tipoUsuario: string

  constructor(
    private router: Router,
    private auth: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit()
  
  {
    window.scroll(0,0)
  }

  validarNome(event: any){
    this.validaNome = event.target.value
  }

  confirmaSenha(event: any){
    this.validaSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value 
  }

  cadastrar(){
    this.usuario.tipo = "normal"

    if(this.usuario.senha != this.validaSenha){
      this.alertas.showAlertDanger('As senhas cadastradas não são iguais!')
    }
    else if(this.validaNome.length < 4){
      this.alertas.showAlertDanger('Insira no mínimo 5 caracteres!')
    }
    else{
     this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) =>{
       this.usuario = resp

       this.router.navigate(['/entrar'])
       this.alertas.showAlertSuccess('Cadastro realizado com sucesso!')
     })
   }
  }
}
