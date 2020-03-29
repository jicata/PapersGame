import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePapersComponent } from './components/create-papers/create-papers.component';

const routes: Routes = [
  { path: '', component: CreatePapersComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
