import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  foto = environment.foto
  usuario: Usuario = new Usuario
  postagem: Postagem = new Postagem
  idUser: number
  
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private postagemService: PostagemService,
    private alertas: AlertasService
  ) { }

  ngOnInit(){

    window.scroll(0,0)

    if (environment.token == '') {
      this.alertas.showAlertInfo('Sua sessão expirou!')
      this.router.navigate(['/entrar'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findUserById(this.idUser)
  }

  findUserById(id: number){
    this.authService.getByIdUser(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  atualizaFoto(event:any){
    this.foto = event.target.value
  }

  atualizar(){
    this.authService.putUser(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp

      environment.token = ''
      
      if (environment.token == '') {
        this.alertas.showAlertSuccess('Usuário atualizado, faça o login novamente!')
        this.router.navigate(['/entrar'])
      }
    })
  }
}
