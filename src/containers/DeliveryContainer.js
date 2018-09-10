import React from 'react'
import {connect} from 'react-redux'
import { updateDeliveryOn, updateDeliveryOff } from '../actions/pizzaAction'

class ListToppingsContainer extends React.PureComponent {

    onChangeDelivery = (e) => {
    if(e.target.checked){
      this.props.updateDeliveryOn(this.props.pizzaOrder)
    } else {
      this.props.updateDeliveryOff(this.props.pizzaOrder)
    }
  }

  render() {
    return (
      <div>
        <h2>Select if you want a Delivery turbo drone</h2>
        <input type="checkbox" name="delivery" onChange={this.onChangeDelivery}/>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  pizzaOrder: state.pizzas.pizza
})

export default connect(mapStateToProps, {   
    updateDeliveryOn,
    updateDeliveryOff
 })(ListToppingsContainer)