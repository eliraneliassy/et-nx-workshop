import {Component, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {CartService} from "@etoro/cart-state";

@Component({
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  selector: 'etoro-workshop-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cartService = inject(CartService);

  numberOfItemsInCart$: Observable<number> = this.cartService.numberOfItemsInCart();
}
