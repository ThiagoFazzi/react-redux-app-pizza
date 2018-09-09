import React from 'react'
import {connect} from 'react-redux'
import { loadAllBases } from '../actions/ingredientsAction'
import { createPizzaBase } from '../actions/pizzaAction'


class ListBasesContainer extends React.PureComponent {
 
  componentDidMount() {
    this.props.loadAllBases()
  }

  onChangeBase = (base) => {
    this.props.createPizzaBase(base)
  }

  render() {

    if(!this.props.bases) return <p>Loading...</p>
    if(!this.props.base === undefined) return <p>Loading...</p>  
    return (
        <div>
            <h2>Choose one Base</h2>
            <ul>
                {this.props.bases.map(base => 
                    <li key={base.id}><input type="radio" name="base" onChange={() => this.onChangeBase(base)} />
                    {base.name} - {base.price}
                    </li>
                )}
            </ul>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  bases: state.bases,
  base: state.pizzas.pizza.base,
})

export default connect(mapStateToProps, { loadAllBases, createPizzaBase })(ListBasesContainer)