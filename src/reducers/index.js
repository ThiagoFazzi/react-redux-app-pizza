import {combineReducers} from 'redux'
import bases from './bases'
import sauces from './sauces'
import toppings from './toppings'
import pizzas from './pizzas'

export default combineReducers({
    bases,
    sauces,
    toppings,
    pizzas
})