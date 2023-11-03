import { Component,OnDestroy } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  recipe:any[] =[];
  error:string = '';
  sub:any;
  constructor(_RecipesService:RecipesService){
   let sub = _RecipesService.getRecipes().subscribe(
       (respons)=> {this.recipe = respons.recipes},
       (err) => {this.error = err.message}
      //(data) => console.log(data.recipes)

    );
  }

  myData:any = []
  subj = new BehaviorSubject<any>(null);
  emitData(){
    this.subj.next(1);
    setTimeout(() => {
      this.subj.next(2)
    }, 1000);
    setTimeout(() =>{
      this.subj.next(3)
    }, 2000);
    setTimeout(() => {
      this.subj.next(4)
    }, 3000);
  }
  subData(){
    this.subj.subscribe((res:any)=>{
      this.myData.push(res)
    })
  }
  ngOnDestroy():void{
    this.sub.unsubscribe();
  }
}
