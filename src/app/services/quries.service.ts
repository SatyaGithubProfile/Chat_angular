import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuriesService {

  getProductsData() {
    return [
        {
            id: '1000',
            code: '20000',
            name: 'BATdfdff099',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: '8253557263',
            quantity: 24,
            inventoryStatus: 'Q002',
            rating: 5
        },
        {
            id: '1001',
            code: '22000',
            name: 'BATdfdff031',
            description: 'Product Description',
            image: 'black-watch.jpg',
            price: 72,
            category: '8633557254',
            quantity: 61,
            inventoryStatus: 'Q005',
            rating: 4
        },
        {
            id: '1002',
            code: '24000',
            name: 'BATdfdff056',
            description: 'Product Description',
            image: 'blue-band.jpg',
            price: 79,
            category: '3033557986',
            quantity: 2,
            inventoryStatus: 'Q082',
            rating: 3
        },
        {
            id: '1003',
            code: '20',
            name: 'BATdfdff098',
            description: 'Product Description',
            image: 'blue-t-shirt.jpg',
            price: 29,
            category: '5823557524',
            quantity: 25,
            inventoryStatus: 'Q025',
            rating: 5
        },
        {
            id: '1004',
            code: '28000',
            name: 'BATdfdff039',
            description: 'Product Description',
            image: 'bracelet.jpg',
            price: 15,
            category: '580355748',
            quantity: 73,
            inventoryStatus: 'Q094',
            rating: 4
        },
        {
            id: '1005',
            code: '10',
            name: 'Brown Purse',
            description: 'Product Description',
            image: 'brown-purse.jpg',
            price: 120,
            category: '303355798',
            quantity: 0,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
        }
    ];
}

getProductsMini() {
  return Promise.resolve(this.getProductsData().slice(0, 5));
}

}
