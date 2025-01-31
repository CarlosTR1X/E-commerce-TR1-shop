import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule, HttpClientModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  faCartShopping = faCartArrowDown;

  @Input() productImage: string = '';
  @Input() productName: string = '';
  @Input() productPrice: string = '';
  @Input() extraInfo: string = '';
}
