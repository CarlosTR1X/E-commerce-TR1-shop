import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { BeautyComponent } from "./slide-bar/section-side-bar/beauty/beauty.component";
import { HomeComponent } from './slide-bar/section-side-bar/home/home.component';
import { TechnologyComponent } from './slide-bar/section-side-bar/technology/technology.component';
import { ClothesComponent } from './slide-bar/section-side-bar/clothes/clothes.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandsCarouselComponent } from './brands-carousel/brands-carousel.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { VehiclesSectionComponent } from "./vehicles-section/vehicles-section.component";
import { OfferSectionComponent } from "./offer-section/offer-section.component";
import { FooterComponent } from "./footer/footer.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    SlideBarComponent,
    HeaderComponent,
    BeautyComponent,
    HomeComponent,
    TechnologyComponent,
    ClothesComponent,
    HttpClientModule,
    BrandsCarouselComponent,
    HeroSectionComponent, VehiclesSectionComponent, OfferSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  /* Asigno un estado automatico para que cargen las card que yo pongo por defecto */
  currentSection: string = 'jewelry';

  onSectionSelected(section: string) {
    this.currentSection = section;
     /* Asigno aqui la seccion actual */
  }
  }
