import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe(
            'pizza',
            'Get 4 Cheese Pepperoni Pizzadilla Recipe from Food Network',
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg'),
        new Recipe(
            'Christmas Crunch Cake',
            'Inspired by the classic sugar cookie',
            'https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg')

    ];
}
