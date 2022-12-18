import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.scss']
})
export class AddEditBookComponent implements OnInit,OnChanges {
  @Input() display: boolean = true;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>()
  @Input() selectBook: any = null
  bookForm = this.formBuilder.group({
    id:["" , Validators.required],
    name: ["", Validators.required],
    detail: ["", Validators.required]
  })

  dialogType = 'New'
  constructor(private formBuilder: FormBuilder, private bookService: BookService
    ,private massageServive:MessageService) { };

  ngOnInit(): void {
  }

  ngOnChanges() :void{   
    if (this.selectBook) {
      this.bookForm.patchValue(this.selectBook);
      this.dialogType = 'Edit';
    }
    else {
      this.bookForm.reset();
      this.dialogType = 'New';
    }
  }
  closeDialog() {
    this.bookForm.reset();
    this.clickClose.emit(true);
  }
  addEditBook() {
    this.bookService.addEditBook(this.bookForm.value , this.selectBook).subscribe(response => {
      console.log(response);this.clickAddEdit.emit(response);
      this.closeDialog();
      const msg =this.dialogType ==='New'?"Book added" :"Book Update";
      this.massageServive.add({severity:'success', summary: 'Success', detail: msg});
    },
      error => {
        this.massageServive.add({severity:'error', summary: 'Error', detail: error});
         console.log('err'); }
        

    )
  }
}
