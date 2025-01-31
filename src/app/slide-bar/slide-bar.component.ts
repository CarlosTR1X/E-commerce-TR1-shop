import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGem, faStar} from '@fortawesome/free-regular-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { faShirtsinbulk, faShopify } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-slide-bar',
  standalone: true,
  imports: [FontAwesomeModule, HttpClientModule],
  templateUrl: './slide-bar.component.html',
  styleUrl: './slide-bar.component.css'
})
export class SlideBarComponent {
  //variables iconos
  faGem = faGem;
  faShirt = faShirtsinbulk;
  faMobile = faMobileScreen;
  faWandMagicSparkles = faStar;
  faXmark = faXmark; 
  faShopify = faShopify;

  isOpen = false; 
  // mi bandera para control de activacion
  toggleSidebar() {
    this.isOpen = !this.isOpen;
    //Invierto el valor
    console.log(this.isOpen ? "El menú está abierto" : "El menú está cerrado");
    // Verificvo si el menu esta abierto o no
  }
  @Output() sectionSelected = new EventEmitter<string>(); 
  // emito un evento de la seccion clikeada
  selectSection(section: string) {
    this.sectionSelected.emit(section);
    console.log("clikeado" + this.sectionSelected.arguments )
  }
  // hago catch a la seleccion dada en el DOM y la emito para el  enrutado

  ngOnInit(): void {
    this.selectSection('jewelery');  // Llamar automáticamente para que cargue la categoría 'jewelery'
  }
}
