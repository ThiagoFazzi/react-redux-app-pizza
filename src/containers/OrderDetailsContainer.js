import React from 'react'
import {connect} from 'react-redux'
import { updatePrice } from '../actions/pizzaAction'



class OrderDetailsContainer extends React.PureComponent {

  componentDidMount() {
    
  }

   onChangeBase = () => {
    //this.props.createPizzaBase(pizza, base)
    //this.props.updatePrice(pizzaPrice)
  }

  render() {

    if(!this.props.pizzaOrder) return <p>Loading...</p>
    return (
        <div>
          <h1>Order Details - {console.log(this.props.pizzaOrder.total)}</h1>r
          <h1>{this.props.pizzaOrder.total}</h1>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  pizzaOrder: state.pizzas.pizza
})

export default connect(mapStateToProps, { updatePrice })(OrderDetailsContainer)