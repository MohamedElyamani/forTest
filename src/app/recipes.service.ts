import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private _HttpClient:HttpClient) {}
  
  getRecipes():Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
  }

  getNews():Observable<any>{
    return this._HttpClient.get(`https://newsapi.org/v2/everything?q=apple&from=2023-05-16&to=2023-05-16&sortBy=popularity&apiKey=dd4efc0803554cdc9d5412c6319b1bf2`)
  }
}
