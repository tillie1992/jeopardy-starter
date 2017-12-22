import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {JeopardyService } from './jeopardy.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title ='app';

  hasAnswered: boolean=false;
  questionInfo;
  playerAnswer:string;
  playerTotal= 0;

  constructor(private jeopardyService: JeopardyService){}

  getDataFromService(){
    this.hasAnswered=false;
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }

clickSubmit(){
  this.hasAnswered=true;
  if(this.playerAnswer==this.questionInfo.answer){
    this.playerTotal = this.playerTotal + this.questionInfo.value
  }
  return this.playerTotal
}
  ngOnInit(){
    this.getDataFromService()
  }

}



