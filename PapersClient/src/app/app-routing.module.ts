import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaperComponent } from './components/paper/paper.component';
import { SubmitPapersComponent } from './components/submit-papers/submit-papers.component';
import { SignalrTestComponent } from './signalr-test/signalr-test.component';


const routes: Routes = [
  { path: '', component: SubmitPapersComponent, pathMatch: 'full' }, 
  { path: 'signalr', component: SignalrTestComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
