import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http'
import {ButtonModule} from 'primeng/button';
import{MessageService} from 'primeng/api'
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import { BookComponent } from './book.component';
import { AddEditBookModule } from './add-edit-book/add-edit-book.module';

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    AddEditBookModule,
    ConfirmDialogModule,
    
  ],
  providers:[MessageService ,ConfirmationService]
})
export class BookModule { }
