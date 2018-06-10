/// <reference path="product.ts" />
import { Component, OnInit } from '@angular/core';
import { Iproduct} from './product'
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
//new code with Module.Id, Relative Path & Module Id
    moduleId:module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
    
})
export class ProductListComponent implements OnInit { 
    pageTitle: string = 'Product List Detail';
    imageWidth: number = 30;
    imagemargin: number = 1;
    showImage: boolean = false;
	listFilter: string = '';
	errorMessage: string;

	products: Iproduct[] = [];

            toggleImage(): void {
        this.showImage = !this.showImage;
    }
	;
	constructor(private _productservice: ProductService) { 
	}

    ngOnInit(): void {
        this.products= this._productservice.getProductss();
        
		//this._productService.getProducts()
		//	.subscribe(products => this.products = products,
		//		error => this.errorMessage = <any>error);
    }

    onRatingClicked(message:string):void{
            this.pageTitle='Product List : ' + message;
    }
}

