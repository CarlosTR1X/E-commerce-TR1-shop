import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faBattleNet ,faAppStore ,faAdn,faFacebook, faGithub, faAirbnb, faAmazon, faAndroid, faAngular, faApple, faAlipay, faAdversal, faAws, faArtstation} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-brands-carousel',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './brands-carousel.component.html',
  styleUrl: './brands-carousel.component.css'
})
export class BrandsCarouselComponent {
faFacebook = faFacebook;
faAngular= faAngular;
faAndroid= faAndroid; 
faGithub= faGithub;
faAirbnb= faAirbnb;
faAmazon= faAmazon;
faApple= faApple; 
faAlipay= faAlipay;
faAdversal= faAdversal; 
faAws= faAws; 
faArtstation= faArtstation; 
faAdn = faAdn;
faAppStore = faAppStore;
faBattleNet = faBattleNet;

}
