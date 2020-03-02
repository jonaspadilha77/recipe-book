import { Component } from '@angular/core';
import { Ingredient } from './ingredients/ingredient.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberStarted: number;
  activeView = 'recipes';
  ingredientListToCart: Ingredient[];
  // serverElements = [{ type: 'server', name: 'blueServer', content: 'blueServer Test' }];

  /*
    task 3: event binding & customn events @Input, Output
    components: server
  */

  // onServerAdded(event: any) {
  //   this.serverElements.push(
  //     {
  //       type: 'server',
  //       name: event.serverName,
  //       content: event.serverContent
  //     });
  // }

  /*
    task 4: Praticing Property & Event Bindind and View Encapsulation
    components: odd, even, game-control
  */

  onStarted(getNumber: number) {
    this.numberStarted = getNumber;
  }

  checkNumber(num: number) {
    return num % 2 === 0;
  }

  getActiveLink(route: string) {
    this.activeView = route;
  }

  getCartIngredients(ingredientList: Ingredient[]) {
    this.ingredientListToCart = ingredientList;
  }
}
