import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  onClearCart() {
    throw new Error('Method not implemented.');
  }
  getTotal(arg0: any): string | number {
    throw new Error('Method not implemented.');
  }
  cart: any;
}
