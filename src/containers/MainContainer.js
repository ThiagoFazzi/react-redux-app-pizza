import React from 'react'
import {connect} from 'react-redux'
import { updatePrice } from '../actions/pizzaAction'
import ListBasesContainer from './ListBasesContainer'
import ListSaucesContainer from './ListSaucesContainer'
import ListToppingsContainer from './ListToppingsContainer';
import OrderDetailsContainer from './OrderDetailsContainer';
import OrdersDetails from '../components/OrdersDetails';
import DeliveryContainer from './DeliveryContainer';

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
        <h1>{this.props.pizza.total}</h1>
        <h1>{this.props.pizza.base.name}</h1>

        <OrdersDetails values={this.props.pizza}></OrdersDetails>
        <ListBasesContainer></ListBasesContainer>
        <ListSaucesContainer></ListSaucesContainer>
        <ListToppingsContainer></ListToppingsContainer>

        <OrderDetailsContainer></OrderDetailsContainer>
        <DeliveryContainer></DeliveryContainer>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  pizza: state.pizzas.pizza,
})

export default connect(mapStateToProps, { updatePrice })(MainContainer)



/**
 * {console.log(this.props.pizza.base.name)}
 {console.log(this.props.pizza.sauce.name)}
 <p>{this.props.pizza.base.name}</p>
 <p>{this.props.pizza.sauce.name}</p>
 <h1>{this.props.price}</h1>
 * 
 */        