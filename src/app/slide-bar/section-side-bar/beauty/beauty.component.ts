import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWandMagicSparkles,  } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../../../card/card.component';
import { ProductService } from '../../../product.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-beauty',
  standalone: true,
  imports: [FontAwesomeModule,
    CardComponent,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './beauty.component.html',
  styleUrl: './beauty.component.css'
})
export class BeautyComponent  {
  faWandMagicSparkles = faWandMagicSparkles;
  // asiga a la variable la propiedad del icono X en el SlideBar close
 

  products: any[] = [];  
  // Array para almacenar los productos

  constructor(private productService: ProductService) { 
    // Llama a la función para obtener los productos cuando se inicialice el componente
  }
  ngOnInit(): void {
    this.fetchProductsByCategory("women's clothing"); // Llamar con la categoría deseada
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
