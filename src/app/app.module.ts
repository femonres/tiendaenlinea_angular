import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { CartPageComponent } from './views/cart-page/cart-page.component';
import { TopbarComponent } from './components/topbar/topbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    CartPageComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
