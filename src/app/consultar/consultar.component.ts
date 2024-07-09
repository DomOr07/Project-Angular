import { Component } from '@angular/core';
import { RootGetAllCharacters } from '../interfaces/rickandmorty';
import { RickAndMortyService } from '../rick-and-morty.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent {
  characters: RootGetAllCharacters | undefined;
  filteredCharacters: RootGetAllCharacters | undefined;
  name: string = '';
  id: string = '';
  gender: string = '';

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.onShowAll();
  }

  onFilter(): void {
    this.rickAndMortyService.filterCharacters(this.name, this.id, this.gender).subscribe({
    next: (res: RootGetAllCharacters) => {
      this.filteredCharacters = res;
      console.log(res);
    },
    error: (err: any) => {
      console.error(err);
    }
    });
  }

  onShowAll(): void {
    this.rickAndMortyService.getRickAndMorty().subscribe({
      next: (res: RootGetAllCharacters) => {
        this.characters = res;
        this.filteredCharacters = res;
        console.log(res);
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
}
