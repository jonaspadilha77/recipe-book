import { NgModule, ModuleWithProviders } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { CartService } from '../cart/cart.service';

@NgModule({})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [CartService]
        };
    }
}
