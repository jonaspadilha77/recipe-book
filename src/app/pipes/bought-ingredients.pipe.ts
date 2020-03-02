import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from '../ingredients/ingredient.model';

@Pipe({
    name: 'boughtIngredients'
})

export class BoughtIngredientsPipe implements PipeTransform {
    transform(ingredients: Ingredient[]): Ingredient[] {
        return ingredients.filter((ingredient: Ingredient) => ingredient.bought);
}
}

