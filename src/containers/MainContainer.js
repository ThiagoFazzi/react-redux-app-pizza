import React from 'react'
import {connect} from 'react-redux'
import { loadAllBases, loadAllSauces, loadAllToppings } from '../actions/ingredientsAction'
//import EventsList from '../components/EventsList'
//import CreateEventFormContainer from './CreateEventFormContainer';

class MainContainer extends React.PureComponent {
  componentDidMount() {
    this.props.loadAllBases()
    this.props.loadAllSauces()
    this.props.loadAllToppings()
  }

  render() {

    if(!this.props.bases) return <p>Loading...</p> 
    return (
      <div>
        <h1>Main Container</h1>
        <h2>Bases</h2>
        <ul>
          {this.props.bases.map(base => 
            <li key={base.id}><input type="radio" name="base" selected/>
              {base.name} - {base.price}
            </li>
          )}
        </ul>
        <h2>Sauces</h2>
        <ul>
          {this.props.sauces.map(sauce => 
            <li key={sauce.id}><input type="radio" name="sauce" selected/>
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bases: state.bases,
  sauces: state.sauces,
  toppings: state.toppings
})

export default connect(mapStateToProps, { loadAllBases, loadAllSauces, loadAllToppings })(MainContainer)