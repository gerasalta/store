import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  url: string = 'https://backend-newstore.herokuapp.com/api/products'

  constructor(private http : HttpClient) { }

  postData(newItem: any){
    return this.http.post(this.url, newItem)
  }

}

