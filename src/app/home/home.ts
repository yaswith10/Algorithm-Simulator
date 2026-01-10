import { Component } from '@angular/core';
import { Searching } from '../algo-pages/searching/searching';

@Component({
  selector: 'app-home',
  imports: [Searching],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  selectedAlgo: any = "";

  changeSelectedAlgo(name: string){
    this.selectedAlgo = name;
    console.log(this.selectedAlgo);
  }
}
