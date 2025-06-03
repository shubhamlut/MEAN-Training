import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductDisplayComponent } from './productdisplay/productdisplay.component';
import { AddToCartComponent } from './addtocart/addtocart.component';
import { CartComponent } from './cart/cart.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { DirectiveExamplesComponent } from './directive-examples/directive-examples.component';
import { BgColorDirective } from './bg-color.directive';
import { TwowWayDataBindingExampleComponent } from './twow-way-data-binding-example/twow-way-data-binding-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RegisterTemplateComponent } from './register-template/register-template.component';
import { RegisterModelComponent } from './register-model/register-model.component';
import { CheckEMailPatternDirective } from './check-email-pattern.directive';
import { MenuComponent } from './menu/menu.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { routes } from './app.routes';
import { provideRouter, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentsByCardComponent } from './payments-by-card/payments-by-card.component';
import { PaymentsByUPIComponent } from './payments-by-upi/payments-by-upi.component';
import { PaymentsByWalletComponent } from './payments-by-wallet/payments-by-wallet.component';
import { PaymentsByNetbankingComponent } from './payments-by-netbanking/payments-by-netbanking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductDisplayComponent,
    AddToCartComponent,
    CartComponent,
    SearchProductsComponent,
    DirectiveExamplesComponent,
    BgColorDirective,
    TwowWayDataBindingExampleComponent,
    EditProductComponent,
    RegisterTemplateComponent,
    RegisterModelComponent,
    CheckEMailPatternDirective,
    MenuComponent,
    MainmenuComponent,
    PageNotFoundComponent,
    PaymentsComponent,
    PaymentsByCardComponent,
    PaymentsByUPIComponent,
    PaymentsByWalletComponent,
    PaymentsByNetbankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }