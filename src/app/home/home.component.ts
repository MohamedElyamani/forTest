import { JsonPipe, formatDate } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Observable, Subscriber, fromEvent, interval, map, mergeMap, of, pipe, switchMap, throttleTime } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck{
  constructor(){

  }

  userName:string = 'Mohamed';
  userAge:number = 26;
  isAdmine:boolean = false;

  sayHello(){
    alert('hello ' + this.userName)
  }


  checkAdmin(){
    this.isAdmine = !this.isAdmine
  }

  users: any[]= [
    {name:'ali',age:'25',gender:'male',salary:5000},
    {name:'ahmed',age:'40',gender:'male',salary:9800},
    {name:'samy',age:'16',gender:'male',salary:2250},
    {name:'mo',age:'35',gender:'male',salary:8000},
    {name:'bebo',age:'43',gender:'male',salary:6000},
    {name:'raj',age:'29',gender:'male',salary:5780},

    {name:'ziko',age:'40',gender:'male',salary:1200}
  ]

  addUser(){
  //  this.users = [...this.users,{name:'frensh',age:'30',gender:'male',salary:5520}]

  //this is for impuer pipe
  this.users.push({name:'frensh',age:'30',gender:'male',salary:5520})
  }

  checkServer = Math.random() > 0.5 ? 'online' : 'offline';
  check(){
    return this.checkServer == 'online'? 'green' : 'red'
  }
createServer:string = '';
serverName:string = ''
create(){
  this.createServer = `server created with ${this.serverName}`
}

change:boolean= false;

click(){
  this.change = !this.change
}

/* person1= {
  name: 'rocky'
} */
ngOnInit(): void {

/*  let obj = new Observable(Subscriber =>{
    Subscriber.next(' like a  moon')
    Subscriber.next(' like a  moon 2')
  })
  obj.subscribe(mes=>{
    console.log(this.person1.name + mes)
  })

  let click = fromEvent(document,'click')
  let result = click.pipe(throttleTime(2000))
  result.subscribe(()=>{
    console.log("x")
  })*/

/* let num = of(1,2,3);
let letter = of('a','b','c')
let result = num.pipe(
  mergeMap(l => letter.pipe(map(n => l + n)))
)
result.subscribe(x =>{
  console.log(x)
}) */


/* let cli = fromEvent(document,'click')
cli.pipe(
  switchMap(()=>{
    return interval(1000)
  })
).subscribe(console.log) */
}

ngDoCheck(): void {
  this.doCheck = 'bbd'
}
doCheck:string = 'doCheck'




}
