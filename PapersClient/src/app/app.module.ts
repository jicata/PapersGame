import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaperComponent } from './components/paper/paper.component';
import { CreatePapersComponent } from './components/create-papers/create-papers.component';
import { CreatePapersService } from './services/create-papers/create-papers.service';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { PlaygroundComponent } from './components/playground/playground.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    PaperComponent,
    CreatePapersComponent,
    PlaygroundComponent,
    PlayerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ],
  providers: [CreatePapersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
