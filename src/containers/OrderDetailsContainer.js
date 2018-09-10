import React from 'react'
import {connect} from 'react-redux'
import {  } from '../actions/pizzaAction'


class OrderDetailsContainer extends React.PureComponent {

  componentDidMount() {
    
  }

  render() {
    if(!this.props.pizzaOrder) return <p>Loading...</p>
    return (
        <div>
          <h1>Order Details</h1>
          <h1>{this.props.pizzaOrder.total}</h1>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  pizzaOrder: state.pizzas.pizza
})

export default connect(mapStateToProps, { })(OrderDetailsContainer)