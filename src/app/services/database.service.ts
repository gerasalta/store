import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  url: string = 'https://backend-newstore.herokuapp.com/api'

  constructor(private http : HttpClient) { }

  // ITEMS

  postItem(newItem: any){
    return this.http.post(`${this.url}/products`, newItem)
  }

  getItems(){
    return this.http.get(`${this.url}/products`)
  }

  deleteItem(id: string){
    return this.http.delete(`${this.url}/products?id=${id}`)
  }

  // CATEGORIES

  getCategories(){
    return this.http.get(`${this.url}/categories`)
  }

  postCategory(newCategory:string){
    return this.http.post(`${this.url}/categories`,{'name': newCategory} )
  }

  deleteCategory(id: string){
    return this.http.delete(`${this.url}/categories?id=${id}`)
  }

  putCategory(id: string, newName: string){
    return this.http.put(`${this.url}/categories?id=${id}`, {"name": newName, "_id": id})
  }

}

