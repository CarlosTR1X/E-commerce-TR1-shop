import { Component } from '@angular/core';
import { VehiclesCarouselComponent } from "./vehicles-carousel/vehicles-carousel.component";



@Component({
  selector: 'app-vehicles-section',
  standalone: true,
  imports: [
    VehiclesCarouselComponent
],
  templateUrl: './vehicles-section.component.html',
  styleUrl: './vehicles-section.component.css'
})
export class VehiclesSectionComponent {




}
