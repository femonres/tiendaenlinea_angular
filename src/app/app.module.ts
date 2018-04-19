import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';

import { MainPageComponent } from './views/main-page/main-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { CartPageComponent } from './views/cart-page/cart-page.component';

import { TopbarComponent } from './components/topbar/topbar.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductInCartComponent } from './components/product-in-cart/product-in-cart.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

import { FilterPipe } from './filter.pipe';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    CartPageComponent,
    TopbarComponent,
    ProductItemComponent,
    ProductInCartComponent,
    FilterPipe,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    FlashMessagesModule,
    NgbModule.forRoot()
  ],
  entryComponents: [ProductDetailComponent],
  providers: [AuthService, AuthGuard, FlashMessagesService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
