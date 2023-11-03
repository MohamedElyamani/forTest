import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  catList:any[]=[
    {id:1, name:'Mobile'},
    {id:2, name:'TV'},
    {id:3, name:'Labtob'},
  ];
  selectedCatID!:number;

/*   reciveTotalPrice:number = 0;

  onTotalPriceChange(totalPrice:number){
    this.reciveTotalPrice = totalPrice
  } */

}
