import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Book} from "./book.interface";

@Component({
  selector: 'etoro-workshop-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input() book?: Book;

  @Output() addToCart = new EventEmitter<Book>();
  @Output() removeFromCart = new EventEmitter<Book>();

  addToCartHandler() {
    this.addToCart.emit(this.book);
  }

  removeFromCartHandler() {
    this.removeFromCart.emit(this.book);
  }
}
