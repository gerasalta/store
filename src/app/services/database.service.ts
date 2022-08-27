import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  url: string = 'https://store-backend.azurewebsites.net/api'

  constructor(private http : HttpClient) { }

  // ITEMS

  getItems(keyword, category){
    return this.http.get(`${this.url}/products?keyword=${keyword}&category=${category}`)
  }

  postItem(newItem: any){
    return this.http.post(`${this.url}/products`, newItem)
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

