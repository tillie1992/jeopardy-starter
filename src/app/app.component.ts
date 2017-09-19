import { Component, OnInit } from '@angular/core';
import {JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  userScore: number = 0;
  userAnswer: string;

  questionInfo;

  constructor(private jeopardyService: JeopardyService){}

  //method that uses the jeopardy service from the api
  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
          console.log(this.questionInfo.answer)
        }
      )
  }

  checkAnswer(){
    if(this.userAnswer == this.questionInfo.answer){
      this.userScore += this.questionInfo.value;
    }
    this.userAnswer = "";
    this.getDataFromService();
  }

  //call the api on loading of the component to get
  //initial data
  ngOnInit(){
    this.getDataFromService()
  }

}
