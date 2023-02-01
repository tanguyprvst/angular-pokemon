import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
    // this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(id: string) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +id);
    this.pokemonSelected = pokemon;
    if (pokemon) {
      console.log(`Vous avez cliué sur le pokemon ${pokemon?.name}`);
      return;
    }
    console.log("Le pokemon que vous avez demandé n'existe pas.");
  }
}