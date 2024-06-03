import { Pokemon } from "./../../domain/pokemon";
import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
  providedIn: "root",
})
export class PokemonAdapter implements Adapter<Pokemon | null> {
  adapt(item: any) {
    if (!item) return null;
    return {
      id: item.id,
      name: item.name,
      image: item.sprites.front_default,
      types: this.handleTypes(item.types),
    };
  }

  private handleTypes(types: any): string[] {
    return types.map((type: { type: any }) => {
      return type?.type;
    });
  }
}
