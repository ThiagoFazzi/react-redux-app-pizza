import React from 'react'
import {connect} from 'react-redux'
import ListBasesContainer from './ListBasesContainer'
import ListSaucesContainer from './ListSaucesContainer'
import ListToppingsContainer from './ListToppingsContainer';
import OrderDetailsContainer from './OrderDetailsContainer';
import DeliveryContainer from './DeliveryContainer';

class MainContainer extends React.PureComponent {
  

  render() {
    if(!this.props.pizza) return <p>Loading...</p>
    return (
      <div>
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

export default connect(mapStateToProps, { })(MainContainer)