import React from 'react'
import {connect} from 'react-redux'
import { loadAllSauces } from '../actions/ingredientsAction'
import { createPizzaSauce } from '../actions/pizzaAction'


class ListSaucesContainer extends React.PureComponent {
 
  componentDidMount() {
    this.props.loadAllSauces()
  }

  onChangeSauce = (sauce) => {
    this.props.createPizzaSauce(sauce)
  }

  render() {

    if(!this.props.sauces) return <p>Loading...</p>
    if(!this.props.sauce === undefined) return <p>Loading...</p>  
    return (
        <div>
            <h2>Choose one Sauce</h2>
            <ul>
                {this.props.sauces.map(sauce => 
                    <li key={sauce.id}><input type="radio" name="sauce" onChange={() => this.onChangeSauce(sauce)} />
                    {sauce.name} - {sauce.price}
                    </li>
                )}
            </ul>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    sauces: state.sauces,
    sauce: state.pizzas.pizza.sauce,
})

export default connect(mapStateToProps, { loadAllSauces, createPizzaSauce })(ListSaucesContainer)