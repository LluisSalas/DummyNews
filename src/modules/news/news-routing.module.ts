// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Views
import * as Views from './views';

// Routes
const routes: Routes = [
  { path: 'news',  component: Views.NewsListView },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
