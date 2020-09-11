import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StateServiceService } from './service/state-service.service';
import { ServerRequestService } from './service/server-request.service';


import { InnerComponentComponent } from './home/homeComponent/inner-component/inner-component.component';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home/home-component/home-component.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { ShopPageComponent } from './shop/shop-page/shop-page.component';
import { UserPageComponent } from './users/user-page/user-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LinkNameFormatedPipe } from './shop/link-name-formated.pipe';
import { ProductSinglePageComponent } from './shop/product-single-page/product-single-page.component';



const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'shop/:name', component: ProductSinglePageComponent },
  { path: '**', component: NotFoundComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    InnerComponentComponent,
    AboutPageComponent,
    ShopPageComponent,
    UserPageComponent,
    NotFoundComponent,
    LinkNameFormatedPipe,
    ProductSinglePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    StateServiceService,
    ServerRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
