import React from 'react'
import {connect} from 'react-redux'
import { loadAllBases, loadAllSauces, loadAllToppings } from '../actions/ingredientsAction'
import { createPizzaBase, createPizzaSauce } from '../actions/pizzaAction'
import PizzaCreatorContainer from './PizzaCreatorContainer'

class MainContainer extends React.PureComponent {
  componentDidMount() {
    this.props.loadAllBases()
    this.props.loadAllSauces()
    this.props.loadAllToppings()
  }


  onChangeBase = (base) => {
    console.log(base)
    this.props.createPizzaBase(base)
  }

  onChangeSauce = (sauce) => {
    console.log(sauce)
    this.props.createPizzaSauce(sauce)
  }



  render() {

    if(!this.props.bases) return <p>Loading...</p>
    if(!this.props.sauces) return <p>Loading...</p>
    if(!this.props.toppings) return <p>Loading...</p>
    if(!this.props.base === undefined) return <p>Loading...</p> 
    if(!this.props.sauce === undefined) return <p>Loading...</p>  
    return (
      <div>
        <h1>Main Container</h1>
        <h2>Bases</h2>
        <ul>
          {this.props.bases.map(base => 
            <li key={base.id}><input type="radio" name="base" onChange={() => this.onChangeBase(base)} selected/>
              {base.name} - {base.price}
            </li>
          )}
        </ul>
        <h2>Sauces</h2>
        <ul>
          {this.props.sauces.map(sauce => 
            <li key={sauce.id}><input type="radio" name="sauce" onChange={() => this.onChangeSauce(sauce)} selected/>
              {sauce.name} - {sauce.price}
            </li>
          )}
        </ul>
        <h2>Toppings</h2>
        <ul>
          {this.props.toppings.map(topping => 
            <li key={topping.id}><input type="checkbox"/>
              {topping.name} - {topping.price}
            </li>
          )}
        </ul>

        <h1>{this.props.base.price + this.props.sauce.price}</h1>
        <h1>{this.props.base.name}</h1>
        <h1>{this.props.sauce.name}</h1>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  bases: state.bases,
  sauces: state.sauces,
  toppings: state.toppings,
  pizza: state.pizzas.pizza,
  base: state.pizzas.pizza.base,
  sauce: state.pizzas.pizza.sauce,
  ingredients: state.pizzas.pizza
})

export default connect(mapStateToProps, { 
  loadAllBases, 
  loadAllSauces, 
  loadAllToppings, 
  createPizzaBase, 
  createPizzaSauce })(MainContainer)