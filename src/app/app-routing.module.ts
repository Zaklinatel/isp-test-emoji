import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAllComponent } from './emojis/page-all/page-all.component';
import { PageFavoritesComponent } from './emojis/page-favorites/page-favorites.component';
import { PageDeletedComponent } from './emojis/page-deleted/page-deleted.component';

const routes: Routes = [
  {
    path: '',
    component: PageAllComponent
  },
  {
    path: 'favorites',
    component: PageFavoritesComponent
  },
  {
    path: 'deleted',
    component: PageDeletedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
