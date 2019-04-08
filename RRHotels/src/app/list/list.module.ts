import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { HotelPageModule } from '../hotel/hotel.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelPageModule,
    RouterModule.forChild([
      {
        path: 'list',
        component: ListPage
      }
    ])
  ],
    declarations: [ListPage],
    entryComponents: [ListPage]
})
export class ListPageModule {}
