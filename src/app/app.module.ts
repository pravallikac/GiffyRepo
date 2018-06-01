import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SelectGiphyService} from './select-giphy.service';


  // replaces previous Http service

import { AppComponent } from './app.component';
import { GiphyselectComponent } from './giphyselect/giphyselect.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphyselectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [SelectGiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
