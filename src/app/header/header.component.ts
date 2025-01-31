import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { SlideBarComponent } from "../slide-bar/slide-bar.component";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, HttpClientModule, SlideBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  /* Creacion de variables para asignar la propiedad de lo que importo, en este caso iconos */ 
  faGithub = faGithub;
  faLinkedin = faLinkedin; 
  faInstagram = faInstagram;
  faMagnifyingGlass = faMagnifyingGlass; 
  faBars = faBars;
}
