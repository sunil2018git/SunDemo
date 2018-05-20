import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe }  from './products/product-filter.pipe';

//import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { StarComponent } from './shared/star.component';


@NgModule({
	imports: [BrowserModule, FormsModule, RouterModule.forRoot([
		{ path: 'products', component: ProductListComponent },
		{ path: 'welcome', component: WelcomeComponent },
		{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
		{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }


	])],
	declarations: [AppComponent, ProductListComponent, ProductFilterPipe, StarComponent,
		WelcomeComponent],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
