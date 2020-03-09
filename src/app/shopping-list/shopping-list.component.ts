import {
  Component,
  OnInit,
  AfterViewChecked,
} from '@angular/core';
import { Ingredient } from 'src/app/ingredients/ingredient.model';
import { CartService } from '../cart/cart.service';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, AfterViewChecked {
  ingredientList: Ingredient[];
  filtered: string;

  constructor(private cartService: CartService, private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    this.ingredientList = this.shoppingListService.getIngredients();


    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredientList = ingredients;
      });
  }

  onNewIngredient(newIgredient: Ingredient) {
    this.ingredientList.push(newIgredient);
  }

  sendToCart(ingredient: Ingredient, index) {
    this.ingredientList[index] = ingredient;
    this.cartService.items.push(ingredient);
  }

  ngAfterViewChecked() {
  }
}



