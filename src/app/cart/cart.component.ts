import { Component, OnInit, Input, AfterViewChecked, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Ingredient } from 'src/app/ingredients/ingredient.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {
  currentList: Ingredient[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.currentList = this.cartService.items;
  }

  removeFromCart(index: number) {
    delete this.cartService.items[index];
    this.cartService.items = this.cartService.items.filter(i => i);
    this.currentList = this.cartService.items;
  }
  ngOnChanges(changes: SimpleChanges) {
  }


}
