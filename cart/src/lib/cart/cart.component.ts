import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';

import {BookComponent} from "@etoro/books";
import {CartService} from "@etoro/cart-state";

@Component({
  selector: 'etoro-workshop-cart',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cartService = inject(CartService);

  itemsInCart$ = this.cartService.getCart();
}
