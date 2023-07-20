import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.scss']
})
export class DropdownComponent {
  @Input() optionList: string[] = [];
  @Output() selectedOption = new EventEmitter<string>();

  public selectedValue: string;
  public defaultValue: string;
  public isOpen: boolean = false;

  constructor() {
    this.defaultValue = 'Todas';
    this.selectedValue = this.defaultValue;
  }

  public changeIsOpen(newValue: boolean): void {
    this.isOpen = newValue;
  }

  public updateSelectedValue(newSelectedValue: string): void {
    this.selectedValue = newSelectedValue;
    this.changeIsOpen(false);
    if (newSelectedValue === this.selectedValue) {
      this.selectedOption.emit(this.defaultValue);      
    } else {
      this.selectedOption.emit(newSelectedValue);
    }
  }
}