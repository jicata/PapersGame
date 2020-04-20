import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePapersComponent } from './components/create-papers/create-papers.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { GameSessionComponent } from './components/game-session/game-session.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';

const routes: Routes = [
  { path: '', component: GameSessionComponent, pathMatch: 'full' },
  { path: 'player', component: CreatePlayerComponent },
  { path: 'papers', component: CreatePapersComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: '*', component: CreatePapersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
