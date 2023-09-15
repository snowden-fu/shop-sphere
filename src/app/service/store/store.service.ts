import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../model/product.model";

const STORE_BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})


export class StoreService {
  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(
    limit = '12',
    sort = 'desc',
    category?: string
  ): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    );
  }
}
