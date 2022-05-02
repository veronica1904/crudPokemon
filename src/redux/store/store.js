import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {pokemoneReducers } from "../reducers/pokemonReducers"


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducersEnviar = combineReducers({
        pokemones: pokemoneReducers

})

export const store= createStore(
    reducersEnviar,
        composeEnhancers(
        applyMiddleware(thunk)
    )
)