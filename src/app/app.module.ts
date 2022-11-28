// <!-- 
// * File: app.module.ts
// * Author: Zentai Pál
// * Group: Szoft-II-N
// * Date: 2022-11-28
// * Github: https://github.com/Pali002/
// * Licenc: GNU GPL -->

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }