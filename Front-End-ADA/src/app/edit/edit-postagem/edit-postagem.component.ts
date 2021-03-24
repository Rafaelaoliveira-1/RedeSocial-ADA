import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-postagem',
  templateUrl: './edit-postagem.component.html',
  styleUrls: ['./edit-postagem.component.css']
})
export class EditPostagemComponent implements OnInit {

  postagem:Postagem = new Postagem()
  tema:Tema = new Tema ()
  foto = environment.foto
  nomeCompleto = environment.nomeCompleto
  cargo = environment.cargo
  idPostagem: number
  idTema:number
  atualizarTemaPostagem: string
  tipoTema: string
  data: Date = new Date()


  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private PostagemService: PostagemService,
    private TemaService: TemaService,
    private alertas: AlertasService

  ) { }

  ngOnInit() {
    
    window.scroll(0,0)
    document.body.style.paddingRight='0px'

    if (environment.token == '') {
      this.alertas.showAlertInfo('Sua sessão expirou!')
      this.router.navigate(['/entrar'])
    }
    this.idPostagem = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPostagem)
  }

  findByIdPostagem(id:number){
    this.PostagemService.getByIdPostagem(id).subscribe((resp: Postagem) =>{
      this.postagem = resp
      this.idTema = this.postagem.tema.id
    })
  }
  
  atualizarTema(){
    this.TemaService.putTema(this.tema).subscribe((resp:Tema)=>{
      this.tema = resp
      this.alertas.showAlertSuccess('Tema atualizado com sucesso!')
    })
  }
  
  atualizar(){
    this.postagem.dataHora = new Date()
    this.PostagemService.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem atualizada com sucesso!')
      this.router.navigate(['/perfil'])
    })
  }

  deletar(id:number){
    this.PostagemService.deletePostagem(id).subscribe(()=>{
      this.alertas.showAlertSuccess('Postagem deletada com sucesso!')
      this.router.navigate(['/perfil'])
    })    
  }

}
