import { Component, OnInit } from '@angular/core';

interface Group {
  id: number;
  name: string;
  description: string;
  image: string;
  backgroundImage: string;
}

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  groups: Group[] = [
    { id: 1, name: 'Manhwas World', description: 'Una comunidad en donde buscan los mejores manhwas para su entretenimiento', image:'/assets/Group-Img/Manhwa.jpg', backgroundImage: '/assets/Group-Img/BackgroundManhwa.jpg'},
    { id: 2, name: 'Guardian Tales Latinoamerica', description: 'Comunidad dedicada para los jugadores Latinoamericanos encargados de proteger la felicidad de la Princesita', image: '/assets/Group-Img/GuardianTales.jpg', backgroundImage: '/assets/Group-Img/BackgroundGuardianTales.jpg'},
  ];

  selectedGroup: Group | null = null;
  isHovered: number | null = null; // Para controlar el índice del grupo que está siendo hover

  constructor() { }

  ngOnInit(): void {
  }

  selectGroup(group: Group): void {
    this.selectedGroup = group;
  }

}
