import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() title: string;
  @Input() options: [];
  @Output() valueSelected = new EventEmitter<string>();
  isOpened = false;
  value = '';
  ngOnInit() {
    this.value = this.title;
  }

  onToggle() {
    this.isOpened = !this.isOpened;
  }

  optionSelect(option: any) {
    if (option) {
      this.value = option.name;
      this.valueSelected.emit(option);
    }

    this.onToggle();
  }
}
