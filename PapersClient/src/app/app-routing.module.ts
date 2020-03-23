import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaperComponent } from './components/paper/paper.component';
import { SubmitPapersComponent } from './components/submit-papers/submit-papers.component';


const routes: Routes = [
  { path: '', component: SubmitPapersComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
