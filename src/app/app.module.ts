import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { AppBootstrapModule } from './app-bootstrap-module/app-bootstrap-module.module';
import { IngredientComponent } from './ingredients/ingredient.component';
import { UnlessDirective } from './directives/unless.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputCepDirective } from './directives/input-cep.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { PriceNumberPipe } from './pipes/price.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { IngredientTypeDirective } from './directives/ingredient-type.directive';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from './shared/shared.module';
import { BoughtIngredientsPipe } from './pipes/bought-ingredients.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    IngredientComponent,
    UnlessDirective,
    DropdownComponent,
    InputCepDirective,
    PriceNumberPipe,
    ShortenPipe,
    FilterPipe,
    IngredientTypeDirective,
    CartComponent,
    BoughtIngredientsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppBootstrapModule,
    SharedModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
