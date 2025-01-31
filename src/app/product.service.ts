import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importa HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  
  // Asegura que el servicio esté disponible globalmente
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/products/category'; // URL base

  constructor(private http: HttpClient) {}

  // Método para obtener los productos según la categoría
  getProductsByCategory(category: string): Observable<any> {
    const apiUrl = `${this.baseUrl}/${encodeURIComponent(category)}`;
  // Construir la URL con la categoría
    return this.http.get(apiUrl); 
    // Realizar la solicitud GET a la API
  }
}