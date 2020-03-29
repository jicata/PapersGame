import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaperComponent } from './components/paper/paper.component';
import { SubmitPapersComponent } from './components/submit-papers/submit-papers.component';
import { CreatePapersService } from './services/create-papers.service';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { SignalrTestComponent } from './signalr-test/signalr-test.component'

@NgModule({
  declarations: [
    AppComponent,
    PaperComponent,
    SubmitPapersComponent,
    SignalrTestComponent
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
