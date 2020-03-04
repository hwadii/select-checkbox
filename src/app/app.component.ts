import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';

interface Option {
  value: string;
  selected: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'material-playground';
  options: Option[] = [
    { value: 'option1', selected: false },
    { value: 'option2', selected: false },
    { value: 'option3', selected: false },
    { value: 'option4', selected: false }
  ];
  optionControl = new FormControl();
  selectedOptions = new Set<Option>();
  filteredOptions$: Observable<Option[]>;

  public ngOnInit() {
    this.filteredOptions$ = this.optionControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    );
  }

  private toggle(option: Option) {
    if (this.selectedOptions.has(option)) {
      this.selectedOptions.delete(option);
    } else {
      this.selectedOptions.add(option);
    }
    console.log(Array.from(this.selectedOptions));
  }

  private filter(option: string) {
    const filterValue = option.toLowerCase();
    return this.options.filter(({ value }) => value.toLowerCase().includes(filterValue));
  }

  optionClicked(event: Event, option: Option) {
    event.stopPropagation();
    this.toggle(option);
  }

  toggleSelection(option: Option) {
    this.toggle(option);
  }
}
