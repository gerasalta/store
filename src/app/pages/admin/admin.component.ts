import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  category = new FormControl('')
  keyword = new FormControl('');
  categories: any[] = [];
  items: any[] = [];
  newCategory = new FormControl('')
  newCategoryName = new FormControl('')
  categoryIndex: number = 0;
  itemIndex: number = 0;
  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getItems();
    this.changeSearchParameters();
  }

  // ITEMS

  getItems() {
    this.db.getItems(this.keyword.value, this.category.value)
      .subscribe({
        next: (data: any) => { this.items = data.docs}
      })
  }

  getItemIndex(index: number) {
    this.itemIndex = index
  }

  deleteItem() {
    this.db.deleteItem(this.items[this.itemIndex]._id)
      .subscribe({
        next: (data) => { console.log(data); this.getItems() }
      })
  }

  // CATEGORY

  getCategories() {
    this.db.getCategories()
      .subscribe({
        next: (data: any) => { this.categories = data }
      })
  }

  postCategory() {
    this.db.postCategory(this.newCategory.value)
      .subscribe({
        next: data => { this.getCategories(); this.newCategory.reset() }
      })
  }

  getCategoryIndex(index: number) {
    this.categoryIndex = index
  }

  deleteCategory() {
    this.db.deleteCategory(this.categories[this.categoryIndex]._id)
      .subscribe({
        next: () => { this.getCategories(); this.getItems() }
      })
  }

  putCategory() {
    this.db.putCategory(this.categories[this.categoryIndex]._id, this.newCategoryName.value)
      .subscribe({
        next: (data: any) => { this.getCategories(); this.getItems() }
      })
  }

  // SEARCH

  changeSearchParameters(){
    this.keyword.valueChanges
    .subscribe(()=>{this.getItems()})
    this.category.valueChanges
    .subscribe(()=>{this.getItems()})
  }

}
