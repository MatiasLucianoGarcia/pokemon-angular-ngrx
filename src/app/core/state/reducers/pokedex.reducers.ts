import { createReducer, on } from '@ngrx/store';
import { testAction } from '../actions/pokedex.actions';

export const INITIAL_STATE = {};

export const testReducer = createReducer(INITIAL_STATE,on(testAction,(state)=> state));