import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  backgrounds: string[] = [
    'url("assets/video/background1.gif")',
    'url("assets/video/background2.gif")',
    'url("assets/video/background3.gif")'
  ];
  currentBackgroundIndex: number = 0;

  ngOnInit() {
    this.changeBackground();
  }

  changeBackground() {
    setInterval(() => {
      this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgrounds.length;
      const container = document.querySelector('.background-container') as HTMLElement;
      if (container) {
        container.style.backgroundImage = this.backgrounds[this.currentBackgroundIndex];
      }
    }, 20000); // Cambiar cada 20 segundos
  }
}
