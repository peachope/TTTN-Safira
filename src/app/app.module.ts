import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { ViewtopComponent } from './shared/viewtop/viewtop.component';
import { SearchboxComponent } from './shared/searchbox/searchbox.component';
import { ViewonComponent } from './shared/viewon/viewon.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FilterComponent } from './components/filter/filter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PolocyShopComponent } from './shared/polocy-shop/polocy-shop.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ItemProductComponent } from './components/item-product/item-product.component';
import { BannerHomeComponent } from './components/banner-home/banner-home.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BackFridayComponent } from './components/back-friday/back-friday.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartDetailComponent } from './views/cart-detail/cart-detail.component';
import { LoginComponent } from './components/login/login.component';
import { ExampleComponent } from './components/example/example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    ViewtopComponent,
    SearchboxComponent,
    ViewonComponent,
    CategoriesComponent,
    FilterComponent,
    PolocyShopComponent,
    NewProductComponent,
    ItemProductComponent,
    BannerHomeComponent,
    BestSellerComponent,
    BlogsComponent,
    BackFridayComponent,
    FooterComponent,
    ProductDetailsComponent,
    CartItemComponent,
    CartDetailComponent,
    LoginComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
