import { Component, OnInit } from '@angular/core';
import { AmigosService, Amigo } from './amigos.service';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {
  amigos: Amigo[] = [];
  nuevoAmigo: Amigo = { id: 0, nombre: '', imagenperfil: '' };
  amigoEditable: Amigo | null = null;

  constructor(private amigosService: AmigosService) {}

  ngOnInit(): void {
    this.getAmigos();
  }

  getAmigos(): void {
    this.amigosService.getAmigos().subscribe((data: Amigo[]) => {
      this.amigos = data;
    });
  }

  addAmigo(): void {
    if (this.nuevoAmigo.nombre && this.nuevoAmigo.imagenperfil) {
      this.amigosService.addAmigo(this.nuevoAmigo).subscribe((amigo: Amigo) => {
        this.amigos.push(amigo);
        this.nuevoAmigo = { id: 0, nombre: '', imagenperfil: '' };
      });
    }
  }

  editAmigo(amigo: Amigo): void {
    this.amigoEditable = { ...amigo };
  }

  updateAmigo(): void {
    if (this.amigoEditable) {
      this.amigosService.updateAmigo(this.amigoEditable).subscribe((updatedAmigo: Amigo) => {
        const index = this.amigos.findIndex(a => a.id === updatedAmigo.id);
        if (index !== -1) {
          this.amigos[index] = updatedAmigo;
        }
        this.amigoEditable = null;
      });
    }
  }

  deleteAmigo(id: number): void {
    this.amigosService.deleteAmigo(id).subscribe(() => {
      this.amigos = this.amigos.filter(amigo => amigo.id !== id);
    });
  }

  cancelEdit(): void {
    this.amigoEditable = null;
  }
}
