import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { FavouriteComponent } from './Pages/favourite/favourite.component';
import { HorrorComponent } from './Pages/menu/horror/horror.component';
import { LiteratureComponent } from './Pages/menu/literature/literature.component';
import { FavButtonDirective } from './Pages/menu/fav-button.directive';
import { FavouriteButtonDirective } from './Pages/favourite/favourites-button.directive';
import { SliderComponent } from './Pages/home/slider/slider.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    FavouriteComponent,
    HorrorComponent,
    LiteratureComponent,
    FavButtonDirective,
    FavouriteButtonDirective,
    SliderComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
