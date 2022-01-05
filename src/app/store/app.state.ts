//definir a interface da proporiedade do componente a ser utilizado

import { createReducer } from "@ngrx/store"

export interface IAppState{
    counter: number;
}

// defino qual estado inicial do mesmo

export const appInitialState: IAppState = {
    counter: 0
}

// Diz qual é o estado inicial da aplicação
export const appReducer = createReducer(
    appInitialState
)

