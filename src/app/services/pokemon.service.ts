import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = ""
  private pokeData: PokemonData | any


  constructor(private Http:HttpClient) { 
    this.baseURL = environment.pokeApi
  }

  getPokemon(pokemonName: string){
    this.pokeData = this
                    .Http
                    .get<PokemonData>
                    (`${this.baseURL}${pokemonName}`)
    return this.pokeData
  }
}


