// <!-- 
// * File: app.component.ts
// * Author: Zentai Pál
// * Group: Szoft-II-N
// * Date: 2022-11-28
// * Github: https://github.com/Pali002/
// * Licenc: GNU GPL -->

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hosszusag !: number;
  elotolas !: number;
  fordulatszam !: number;
  megmunkalasi_ido!: number;
  show: boolean = false;


  calcArea():void{
    this.megmunkalasi_ido = this.hosszusag / this.elotolas * this.fordulatszam;
    this.timeShow()
  }

  timeShow() :void {
    this.show = true;
  }
}