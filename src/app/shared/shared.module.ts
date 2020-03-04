import { NgModule, ModuleWithProviders } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { CartService } from '../cart/cart.service';
import { AppIconService } from './icons/icons.service';

@NgModule({
    declarations: [

    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                CartService,
                RecipeService,
                AppIconService
            ]
        };
    }
}
