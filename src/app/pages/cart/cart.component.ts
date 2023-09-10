import {Component} from '@angular/core';
import {CartItem} from "../../model/cart.model";


const ELEMENT_DATA: Array<CartItem> = [
  {
    product: 'https://placehold.co/150',
    name: 'Product 1',
    price: 100,
    quantity: 1,
    id: 1,
  },
  {
    product: 'https://placehold.co/150',
    name: 'Product 2',
    price: 200,
    quantity: 2,
    id: 2,
  },
  {
    product: 'https://placehold.co/150',
    name: 'Product 3',
    price: 300,
    quantity: 3,
    id: 3,
  }
];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'actions'
  ];
  dataSource = ELEMENT_DATA;

  onDelete(element: CartItem) {
    console.log('Delete', element);
  }

  onClear() {
    console.log('Clear')
  }
}
