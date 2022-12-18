import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
;import {BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AddEditBookComponent } from './add-edit-book.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms'
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AddEditBookComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule

  ],
  exports:[AddEditBookComponent]
})
export class AddEditBookModule { }
