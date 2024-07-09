import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuarioNombre: string | null = null;
  descripcion: string = '';
  isEditing = false;
  userId: number = 1;

  constructor(private AuthService: AuthService, private http: HttpClient) {}

  ngOnInit() {
      this.AuthService.currentUser.subscribe(userName => {
        this.usuarioNombre = userName;
        this.loadProfile();
      });
  }

  loadProfile() {
        this.http.get<any>('http://localhost:3000/users/${this.userId}').subscribe(user => {
          this.descripcion = user.description || '';
        });
      }

  toggleEdit() {
    this.isEditing = true;
}

  saveProfile() {
    const updateUser = {
      username: this.usuarioNombre,
      description: this.descripcion
    };

    this.http.put('http://localhost:3000/users', updateUser).subscribe(() => {
      this.isEditing = false;
      console.log('Perfil Guardado');
    });
}

cancelEdit() {
  this.isEditing = false;
  this.loadProfile();
}

  goToSite(url: string) {
    window.open(url, '_blank');
}
}
