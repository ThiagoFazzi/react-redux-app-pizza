import React from 'react'
import {connect} from 'react-redux'
import { updatePrice } from '../actions/pizzaAction'
import ListBasesContainer from './ListBasesContainer'
import ListSaucesContainer from './ListSaucesContainer'
import ListToppingsContainer from './ListToppingsContainer';

class MainContainer extends React.PureComponent {
  
  calcTotalPrice = (pizza) => {
      if(!pizza.base.price) pizza.base.price = 0
      if(!pizza.sauce.price) pizza.sauce.price = 0
      const pizzaPrice = (pizza.base.price + pizza.sauce.price)
      this.props.updatePrice(pizzaPrice)
  }
  
  render() {
    if(!this.props.pizza) return <p>Loading...</p>
    return (
      <div>
        <ListBasesContainer></ListBasesContainer>
        <ListSaucesContainer></ListSaucesContainer>
        <ListToppingsContainer></ListToppingsContainer>

        {console.log(this.props.pizza.base.name)}
        {console.log(this.props.pizza.sauce.name)}
        <p>{this.props.pizza.base.name}</p>
        <p>{this.props.pizza.sauce.name}</p>
        <h1>{this.props.price}</h1>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  pizza: state.pizzas.pizza,
  price: state.pizzas.pizza.total,
})

export default connect(mapStateToProps, { updatePrice })(MainContainer)