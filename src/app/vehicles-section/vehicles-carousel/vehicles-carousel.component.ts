import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { vehiculos, } from '../../../models/vehiculos';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vehicles-carousel',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './vehicles-carousel.component.html',
  styleUrl: './vehicles-carousel.component.css'
})
export class VehiclesCarouselComponent {
  //importo mi modelo de vehiculos para llenar las tarjetas
  vehicles = vehiculos; 

}