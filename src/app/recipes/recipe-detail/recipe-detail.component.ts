import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/ingredients/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  static onAddIngredients: any;

  @Input() recipe: Recipe;
  optionsMenu = [
    { name: 'To Shopping List', execFun: RecipeDetailComponent.onAddIngredients },
    { name: 'Edit Recipe', execFun: () => { } },
    { name: 'Delete Recipe', execFun: () => { } }
  ];

  optionSelected = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) =>
      this.recipe = recipe);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onAction() {
    if (this.optionSelected.name === 'To Shopping List') {
      this.onAddIngredients();
    }

    this.optionSelected = null;
  }

  onAddIngredients() {
    this.recipeService.sendToShoppingList(this.recipe.ingredients);
  }
}
