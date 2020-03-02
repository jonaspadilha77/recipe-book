import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() title: string;
  @Input() options: [];

  isOpened = false;

  ngOnInit() {
  }

  onToggle() {
  this.isOpened = !this.isOpened;
  }

}
