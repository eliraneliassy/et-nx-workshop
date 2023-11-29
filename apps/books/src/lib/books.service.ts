import {inject, Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Book} from "./book.interface";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  BASE_URL = `https://www.googleapis.com/books/v1/volumes`;
  httpClient = inject(HttpClient);

  getBooks(query: string): Observable<Book[]> {
    let params = new HttpParams();
    params = params.append('q', query);

    return this.httpClient.get<any>(this.BASE_URL, {params})
      .pipe(
        map((res: any) => res.items),
        map((items: any[]) => items.map(item => ({
          title: item.volumeInfo.title,
          imageUrl: item.volumeInfo.imageLinks.thumbnail,
          id: item.id,
          price: item.volumeInfo.pageCount
        })))
      )
  }
}
