import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'typing-game';

  randomText = lorem.sentence(); //to generate random text using Faker
  enteredText = '';

  onInput(inputEvent:any){
    this.enteredText = inputEvent.target.value;
  }

  getCompareResult(randomLetter:string, enteredLetter:string){
    if(!enteredLetter){
      return 'pending';
    }
    return randomLetter === enteredLetter?'correct':'incorrect';
  }

}
