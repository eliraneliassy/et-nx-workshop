import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Book, BookComponent, BooksService} from "@etoro/books";
import {Observable} from "rxjs";
import {CartService} from "@etoro/cart-state";


@Component({
  selector: 'etoro-workshop-feed',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent {
  booksService = inject(BooksService);
  cartService = inject(CartService);

  books$: Observable<Book[]> = this.booksService.getBooks('angular');

  constructor() {

  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }
}
