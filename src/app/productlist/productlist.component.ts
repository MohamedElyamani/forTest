import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit, OnChanges{


  itemCount:number = 0;
  @Input() sendCatList:number = 0;
  fitlerResult:any [] = [];
  @Output() resultForCart:EventEmitter<Cart> = new EventEmitter()
/*   orderdTotalPrice:number=0
  @Output() totalPrice:EventEmitter<number> = new EventEmitter() */

  productList:any [] = [
    {id: 100, name:'IPhone 14 Pro', price:1012, quantity:1, categoryID:'1'},
    {id: 200, name:'Samsung S22', price:8512, quantity:3, categoryID:'1'},
    {id: 300, name:'Tornado', price:5654, quantity:2, categoryID:'2'},
    {id: 400, name:'Toshiba', price:2147, quantity:0, categoryID:'2'},
    {id: 500, name:'Lenovo', price:8154, quantity:4, categoryID:'3'},
    {id: 600, name:'HP', price:7456, quantity:1, categoryID:'3'},
  ];
  constructor(){}
ngOnInit(): void {
  this.fitlerResult = this.productList;
}
ngOnChanges(): void {
  this.filter()
}
 private filter(){
    if(this.sendCatList == 0){
      this.fitlerResult = this.productList;
    }else{
      this.fitlerResult = this.productList.filter(item => item.categoryID == this.sendCatList)
    }
  }

  editAVQauntity(item:any, count:any){
    let currentCount = 0
    if(currentCount < count){
      item.quantity--
    }else{
      item.quantity++
    }

    //currentCount = count
    console.log('item' ,item);
    console.log('count', count);

  }
/*
calcPrice(count:any, price:number){
    this.orderdTotalPrice += +count * price;
    this.totalPrice.emit(this.orderdTotalPrice)
}
 */

addProduct(){
  this.resultForCart.emit()
}


}
