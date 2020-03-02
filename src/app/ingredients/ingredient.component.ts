import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  @Input() ingredientList: Ingredient[];
  @Output() itemClicked = new EventEmitter<Ingredient>();

  ngOnInit() {}

  registerOnClick(ingredient: Ingredient) {
    this.itemClicked.emit(ingredient);
  }

}
