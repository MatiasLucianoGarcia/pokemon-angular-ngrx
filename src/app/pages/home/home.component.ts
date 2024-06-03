import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../shared/services/pokemon.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  private pokemonService = inject(PokemonService); 

  ngOnInit(): void {
    this.pokemonService.getPokemonPage(30,0).subscribe(res => console.log(res));
  }

}
