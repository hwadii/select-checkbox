import { Component } from '@angular/core';

interface Option {
  value: string;
  selected: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-playground';
  options: Option[] = [
    { value: 'option1', selected: false },
    { value: 'option2', selected: false },
    { value: 'option3', selected: false },
    { value: 'option4', selected: false },
  ];

  optionClicked(event: Event) {
    event.stopPropagation();
  }

  toggleSelection(option: Option) {
    console.log(option);
  }
}
