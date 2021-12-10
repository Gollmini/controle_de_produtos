import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intrucoes',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-realizado',
    loadChildren: () => import('./cadastro-realizado/cadastro-realizado.module').then( m => m.CadastroRealizadoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signtarure',
    loadChildren: () => import('./signtarure/signtarure.module').then( m => m.SigntarurePageModule)
  },
  {
    path: 'intrucoes',
    loadChildren: () => import('./intrucoes/intrucoes.module').then( m => m.IntrucoesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
