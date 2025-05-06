import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartSidebarComponent } from './components/cart-sidebar/cart-sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CatalogComponent } from './components/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartSidebarComponent,
    HeaderComponent,
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
