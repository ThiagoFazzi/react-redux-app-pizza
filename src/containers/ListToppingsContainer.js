import React from 'react'
import {connect} from 'react-redux'
import { loadAllToppings } from '../actions/ingredientsAction'
import { createPizzaAddTopping, createPizzaRemoveTopping, updatePrice } from '../actions/pizzaAction'

class ListToppingsContainer extends React.PureComponent {
  state = {checkboxSelection: 0}
  
  componentDidMount() {
    this.props.loadAllToppings()
  }

  onChangeTopping = (e, topping) => {
    if(e.target.checked){
      this.props.createPizzaAddTopping(topping)
      this.props.updatePrice(this.props.pizzaOrder)
    } else {
      this.props.createPizzaRemoveTopping(topping)
      this.props.updatePrice(this.props.pizzaOrder)
    }
  }

  onLimitCheckBox = (event) => {
  
  }


  render() {
    if(!this.props.toppings) return <p>Loading...</p>
    return (
      <div>
        <h2>Choose 3 toppings</h2>
        <ul>
          {this.props.toppings.map(topping => 
            <li key={topping.id}><input type="checkbox" onChange={(e) => this.onChangeTopping(e, topping)}/>
              {topping.name} - {topping.price}
            </li>
          )}
        </ul>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  toppings: state.toppings,
  pizzaOrder: state.pizzas.pizza
})

export default connect(mapStateToProps, {   
  loadAllToppings,  
  createPizzaAddTopping,
  createPizzaRemoveTopping,
  updatePrice })(ListToppingsContainer)