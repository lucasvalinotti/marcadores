import { Component, Input, ViewChild } from '@angular/core';
import { WinnerPipe } from '../../pipes/winner-pipe.pipe';

@Component({
  selector: 'mosca-card',
  templateUrl: './mosca-card.component.html',
  styleUrls: ['./mosca-card.component.css']
})
export class MoscaCardComponent {
  public score:number = 15;
  public visible:boolean = false;
  
  public resetGame() {
    this.score = 15;
  }

  public changeScore(value:number){
    this.score += value;
    if(this.score <= 0){
      this.score = 0;
      this.visible = true;
    } 
  }
}
