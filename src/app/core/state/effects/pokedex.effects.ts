// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import {map, switchMap } from "rxjs";
// import { PokemonService } from "../../../shared/services/pokemon.service";

// @Injectable()
// export class PokedexEffects {
//   constructor(private actions$: Actions, private pokemonService:PokemonService) {}

//   loadTest$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(
//         "Action a la cual hago referencia"),
//        switchMap(() => {
//         //Llamada al servicio
//         this.pokemonService.getPokemonById(1).pipe(map())
//        })
//       )
//     )
//   );
// }
