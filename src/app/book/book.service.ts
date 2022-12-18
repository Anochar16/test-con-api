import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http: HttpClient) { }

  getBook(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/get-all');
  }

  addEditBook(postBook: any, selectB:any) {
    if(!selectB){
    return this.http.post('http://localhost:3000/add-book', postBook);}
    else{
      return this.http.post<Book>('http://localhost:3000/update', postBook);}
    }

  deleteBook(id :string){
    return this.http.post<Book>('http://localhost:3000/delete',id);
  }
  }



