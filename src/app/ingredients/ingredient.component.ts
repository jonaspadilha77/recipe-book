import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, AfterViewChecked } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit, AfterViewChecked {

  @Input() ingredientList: Ingredient[];
  @Output() itemClicked = new EventEmitter<Ingredient>();
  @Input() filtered: string;

  ngOnInit() { }

  registerOnClick(ingredient: Ingredient) {
    this.itemClicked.emit(ingredient);
  }

  ngAfterViewChecked() {
    if (this.filtered && !this.ingredientList.length) {
      setTimeout(() => {
        alert('asdjasdasd');
      }, 800);
    }
  }

}
