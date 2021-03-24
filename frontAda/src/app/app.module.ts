import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';
import { EditUsuarioComponent } from './edit/edit-usuario/edit-usuario.component';
import { EditPostagemComponent } from './edit/edit-postagem/edit-postagem.component';
import { PerfilComponent } from './perfil/perfil.component';
import { OrderModule } from 'ngx-order-pipe';
import { AlertasComponent } from './alertas/alertas.component';
import { ConexaoComponent } from './conexao/conexao.component';
import { EmpresaItauComponent } from './empresa-itau/empresa-itau.component';
import { EmpresaMercadolivreComponent } from './empresa-mercadolivre/empresa-mercadolivre.component';
import { EmpresaB2wComponent } from './empresa-b2w/empresa-b2w.component';
import { EmpresaConductorComponent } from './empresa-conductor/empresa-conductor.component';
import { EmpresaMagaluComponent } from './empresa-magalu/empresa-magalu.component';
import { EmpresaMc1Component } from './empresa-mc1/empresa-mc1.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    CadastrarComponent,
    PrincipalComponent,
    HomeComponent,
    EditUsuarioComponent,
    EditPostagemComponent,
    PerfilComponent,
    AlertasComponent,
    ConexaoComponent,
    EmpresaItauComponent,
    EmpresaMercadolivreComponent,
    EmpresaB2wComponent,
    EmpresaConductorComponent,
    EmpresaMagaluComponent,
    EmpresaMc1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
