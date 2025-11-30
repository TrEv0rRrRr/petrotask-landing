import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { particlesConfig } from './particles-config';

declare var particlesJS: any;

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    // Cargar el script de particles.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      this.initializeParticles();
    };
    document.head.appendChild(script);
  }

  ngAfterViewInit() {
    // Intentar inicializar de nuevo después de que la vista esté lista
    if (typeof particlesJS !== 'undefined') {
      this.initializeParticles();
    }
  }

  private initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
      try {
        particlesJS('particles-js', particlesConfig);
      } catch (error) {
        console.error('Error initializing particles:', error);
      }
    }
  }
}
