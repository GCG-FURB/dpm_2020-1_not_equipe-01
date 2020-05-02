import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'produtoform',
    loadChildren: () => import('./produtoform/produtoform.module').then( m => m.ProdutoformPageModule)
  },
  {
    path: 'pessoas',
    loadChildren: () => import('./pessoas/pessoas.module').then( m => m.PessoasPageModule)
  },
  {
    path: 'pessoas-form',
    loadChildren: () => import('./pessoas-form/pessoas-form.module').then( m => m.PessoasFormPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
