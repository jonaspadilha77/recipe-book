import { Ingredient } from '../ingredients/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
    ingredientList: Ingredient[] = [];
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    getIngredients() {
        return this.ingredientList.slice();
    }

    add(ingredients: Ingredient[]) {
        this.ingredientList.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredientList);
    }

}
