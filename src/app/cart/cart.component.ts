import { Component, EventEmitter, Output } from '@angular/core';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  orderdTotalPrice:number=0
  @Output() totalPrice:EventEmitter<number> = new EventEmitter()

  calcPrice(count:any, price:number){
    this.orderdTotalPrice += +count * price;
    this.totalPrice.emit(this.orderdTotalPrice)
}

}
