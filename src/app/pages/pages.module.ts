import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { AdminComponent } from './admin/admin.component';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from '../app-routing.module';
import { CreateItemComponent } from './create-item/create-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    ItemComponent,
    CreateItemComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    AdminComponent,
    ItemComponent
  ]
})

export class PagesModule { }
