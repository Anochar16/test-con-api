import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { catchError, Observable, of } from 'rxjs';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  bookList: Book[] = []
  display = false;

  A = false
  selectBook: any = null
  constructor(private bookService: BookService, private confirmationService: ConfirmationService , private messageService:MessageService) { }

  ngOnInit(): void {
    this.getBookList();
  }
  getBookList(): void {
    this.bookService.getBook().subscribe(response => {
      this.bookList = response
    });
  }

  onClickDialog() {
    this.display = true;
    this.selectBook = null;
  }


  hideAddDialog(isClosed: boolean) {
    this.display = !isClosed
  }
  saveOrUpdateBookToList(newBook: Book) {
    if (newBook.id == this.selectBook.id) {
      const bookIndex = this.bookList.findIndex(data => data.id === newBook.id);
      this.bookList[bookIndex] = newBook
    }
    else { this.bookList.unshift(newBook); }

  }
  editbook(book: Book) {
    this.display = true;
    this.selectBook = book;
  }

 
  deleteBook(book: Book) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + book.name + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.bookList = this.bookList.filter(val => val.id !== book.id);
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
        }
    });
}
}
