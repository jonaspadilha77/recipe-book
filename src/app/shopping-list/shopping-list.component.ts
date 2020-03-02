import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/ingredients/ingredient.model';
import { mockIngredientes } from 'src/app/ingredients/mock-ingredients';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientList: Ingredient[];
  filtered: string;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.ingredientList = mockIngredientes.map(item => new Ingredient(item.name, item.amount, item.type));
  }

  onNewIngredient(newIgredient: Ingredient) {
    this.ingredientList.push(newIgredient);
  }

  sendToCart(ingredient: Ingredient) {
    this.cartService.items.push(ingredient);
  }
}
