import { Component,OnDestroy } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnDestroy {
  newsContainer:any[]=[];
  error:string='';
  sub:any;

constructor(_RecipesService:RecipesService){
  let sub = _RecipesService.getNews().subscribe(
    (data)=> {this.newsContainer = data.articles},
    (err) => {this.error = err.message}
  )
}
  ngOnDestroy():void{
    this.sub.unsubscripe()
  }

}
