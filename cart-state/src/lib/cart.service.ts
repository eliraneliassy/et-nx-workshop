import { Injectable } from '@angular/core';
import {Book} from "@etoro/books";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  constructor() { }

  getCart(): Observable<Book[]> {
    return this.cart$.asObservable();
  }

  addToCart(book: Book) {
    const currentCart = this.cart$.value;
    const newCart = [...currentCart, book];
    this.cart$.next(newCart)
  }

  removeFromCart(book: Book) {
    let currentCart = this.cart$.value;
    currentCart = currentCart.filter(b => b.id !== book.id);
    this.cart$.next(currentCart);
  }

  numberOfItemsInCart(){
    return this.cart$.pipe(
      map((books: Book[]) => books.length)
    )
  }
}
