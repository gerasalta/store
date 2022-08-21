import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  errors: any = {}
  spinner: boolean = false;

  newItem = new FormGroup({
    image: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    stock: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [])
  })

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
  }

  creatItem(){
    this.spinner = true
    this.db.postData(this.newItem.value)
    .subscribe({
      next: data => {},
      error: err => this.errors = err,
      complete: () => {
        this.newItem.reset(),
        this.spinner = false
      }
    })
  }

} 
