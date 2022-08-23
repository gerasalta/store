import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  categories: any[] = [];
  items: any [] = [];
  newCategory = new FormControl('')
  categoryIndex: number = 0;
  itemIndex: number = 0;

  constructor(private db : DatabaseService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getItems();
  }

  // ITEMS

  getItems(){
    this.db.getItems()
    .subscribe({
      next: (data:any) => {this.items = data.docs}
    })
  }

  getItemIndex(index: number){
    this.itemIndex = index
  }

  deleteItem(){
    this.db.deleteItem(this.items[this.itemIndex].get('_id').value)
    .subscribe({
      next: () => {this.getItems}
    })
  }
 // CATEGORY

  getCategories(){
    this.db.getCategories()
    .subscribe({
      next: (data: any) => {this.categories = data}
    })
  }

  createCategory(){
    this.db.postCategory(this.newCategory.value)
    .subscribe({
      next: data => {this.getCategories(); this.newCategory.reset()}
    })
  }

  getCategoryIndex(index: number){
    this.categoryIndex = index
  }

  deleteCategory(){
    this.db.deleteCategory(this.categories[this.categoryIndex]._id)
    .subscribe({
      next: () => {this.getCategories()}
    })
  }
}
