import { Injectable } from '@angular/core';
import { Iproduct } from './product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';


@Injectable()
export class ProductService
{
	private productURL = './api/products/products.json';

	constructor(private _http: HttpClient) { }

	getProducts(): Observable<Iproduct[]>{
		
		return this._http.get<Iproduct[]>(this.productURL)
			.do(data =>console.log('All: '+ JSON.stringify(data))) 
			.catch(this.Errorhandeling);
	}

	private Errorhandeling(err: HttpErrorResponse) {
		console.log(err.message);
		return Observable.throw(err.message);
	}
}