import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
