import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './components/order/order.component';
import { ProductListComponent } from './utils/product-list/product-list.component';
import { UserDataFormComponent } from './components/user-data-form/user-data-form.component';
import { MessageComponent } from './utils/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    ProductListComponent,
    UserDataFormComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
