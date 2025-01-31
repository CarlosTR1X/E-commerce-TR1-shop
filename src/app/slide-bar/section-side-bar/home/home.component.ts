import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../../../card/card.component';
import { ProductService } from '../../../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule,
CardComponent,
CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faHome = faHome;
 

      products: any[] = [];  
      // Array para almacenar los productos
    
      constructor(private productService: ProductService) { 
        // Llama a la función para obtener los productos cuando se inicialice el componente
      }
      ngOnInit(): void {
        this.fetchProductsByCategory("jewelery");
        
         // Llamar con la categoría deseada
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
