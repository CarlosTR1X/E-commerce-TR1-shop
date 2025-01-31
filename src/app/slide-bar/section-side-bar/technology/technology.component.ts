import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faMobile,  } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../../product.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../card/card.component';
@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, CardComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {
  faMobile = faMobile;

    products: any[] = [];  
    // Array para almacenar los productos
  
    constructor(private productService: ProductService) { 
      // Llama a la función para obtener los productos cuando se inicialice el componente
    }
    ngOnInit(): void {
      this.fetchProductsByCategory("electronics"); // Llamar con la categoría deseada
    }
    fetchProductsByCategory(category: string) : void{
      // Llamada al servicio para obtener los productos
      this.productService.getProductsByCategory(category).subscribe((data) => {
        this.products = data; 
        // Asigna los datos a la propiedad products
        console.log(this.products) 
      });
    }
}
