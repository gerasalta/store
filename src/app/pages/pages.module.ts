import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { AdminComponent } from './admin/admin.component';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from '../app-routing.module';
import { CreateItemComponent } from './create-item/create-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    ItemComponent,
    CreateItemComponent,
    EditItemComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    AdminComponent,
    ItemComponent
  ]
})

export class PagesModule { }
