import React from 'react'
import {connect} from 'react-redux'
import {  } from '../actions/pizzaAction'


class OrderDetailsContainer extends React.PureComponent {

  componentDidMount() {
    
  }

  render() {
    if(!this.props.pizzaOrder.pizza) return <p>Loading...</p>
    return (
        <div>
          <h1>Order Details</h1>
          <h1>{this.props.pizzaOrder.pizza.total}</h1>
          <p>{this.props.pizzaOrder.pizza.base.name}</p>
          <p>{this.props.pizzaOrder.pizza.sauce.name}</p>
          {this.props.pizzaOrder.pizza.topping.map(top => <li key={top.id}>{top.name}</li>)}
        </div>
    )
  }
}

const mapStateToProps = state => ({
  pizzaOrder: state.pizzas
})

export default connect(mapStateToProps, { })(OrderDetailsContainer)