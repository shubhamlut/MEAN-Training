import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentsComponent } from './payments/payments.component';

export const routes: Routes = [
{path:"products",component:HomeComponent},
{path:"searchProducts",component:SearchProductsComponent},
{path:"",redirectTo:"products",pathMatch:"full"},
{path:"payment",component:PaymentsComponent},
{path:"**",component:PageNotFoundComponent},
];
