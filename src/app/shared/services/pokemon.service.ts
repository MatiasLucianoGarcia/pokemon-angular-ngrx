import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { PokemonAdapter } from "../adapters/pokemon-adapter";
import { Adapter } from "../adapters/adapter";
import { Pokemon } from "../../domain/pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  private url: string = "https://pokeapi.co/api/v2/pokemon";
  private http: HttpClient = inject(HttpClient);
  private adapter: Adapter<Pokemon | null> = inject(PokemonAdapter);

  public getPokemonById(id: number): Observable<Pokemon | null> {
    return this.http
      .get(`${this.url}/${id}`)
      .pipe(map((res) => this.adapter.adapt(res)));
  }

  public getPokemonByName(name: string): Observable<Pokemon | null> {
    return this.http
      .get(`${this.url}/${name}`)
      .pipe(map((data: any) => this.adapter.adapt(data)));
  }

  public getPokemonPage1(limit: number, offset: number): Observable<Pokemon[]> {
    return this.http.get(`${this.url}?limit=${limit}&offset=${offset}`).pipe(
      map((data: any) => {
        console.log(data);
        let pokemons: Pokemon[] = [];
        data.results.forEach((element: any, index: number) => {
          this.getPokemonByName(element.name).subscribe(
            (res) => {
              if (res) pokemons[index] = res;
            },
            (error) => {
              console.log(error);
            }
          );
        });
        return pokemons;
      })
    );
  }

  public getPokemonPage(limit: number, offset: number): Observable<Pokemon[]> {
    return this.http.get(`${this.url}?limit=${limit}&offset=${offset}`).pipe(
      map((data: any) => {
        console.log(data);
        let pokemons: Pokemon[] = [];
        data.results.forEach((element: any, index: number) => {
          this.getPokemonByName(element.name).subscribe({
            error: (e) => console.error(e),
            next: (res) => {
              if (res) pokemons[index] = res;
            },
          });
        });
        return pokemons;
      })
    );
  }
}
