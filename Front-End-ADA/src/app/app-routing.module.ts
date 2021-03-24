import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ConexaoComponent } from './conexao/conexao.component';
import { EditPostagemComponent } from './edit/edit-postagem/edit-postagem.component';
import { EditUsuarioComponent } from './edit/edit-usuario/edit-usuario.component';
import { EmpresaB2wComponent } from './empresa-b2w/empresa-b2w.component';
import { EmpresaConductorComponent } from './empresa-conductor/empresa-conductor.component';
import { EmpresaItauComponent } from './empresa-itau/empresa-itau.component';
import { EmpresaMagaluComponent } from './empresa-magalu/empresa-magalu.component';
import { EmpresaMc1Component } from './empresa-mc1/empresa-mc1.component';
import { EmpresaMercadolivreComponent } from './empresa-mercadolivre/empresa-mercadolivre.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
 
  {path:'entrar',component:EntrarComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'principal', component: PrincipalComponent},
  {path: 'home', component: HomeComponent},
  {path: 'edit-usuario/:id', component: EditUsuarioComponent},
  {path: 'edit-postagem/:id', component: EditPostagemComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'conexao/:id',component: ConexaoComponent},
  {path: 'empresa-itau', component: EmpresaItauComponent},
  {path: 'empresa-b2w', component: EmpresaB2wComponent},
  {path: 'empresa-conductor', component: EmpresaConductorComponent},
  {path: 'empresa-magalu', component: EmpresaMagaluComponent},
  {path: 'empresa-mc1', component: EmpresaMc1Component},
  {path: 'empresa-mercadolivre', component: EmpresaMercadolivreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
