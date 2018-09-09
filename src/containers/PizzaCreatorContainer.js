import React from 'react'
import { connect }  from 'react-redux' 
import { createPizzaBase, createPizzaSauce } from '../actions/pizzaAction'

class PizzaCreatorContainer extends React.PureComponent {
    componentDidMount() {
      this.props.createPizzaBase()
      this.props.createPizzaSauce()
    }
  
    render() {
      
      if(!this.props.bases) return <p>Loading...</p>
      if(!this.props.sauces) return <p>Loading...</p>
      if(!this.props.toppings) return <p>Loading...</p> 
      
      console.log(this.props.ingredients)
      return (
        <div>
          <h1>{this.props.ingredients.base.name}</h1>
          <h1>{this.props.ingredients.sauce.name}</h1>

          {console.log(Number(this.props.ingredients.base.price) + Number(this.props.ingredients.sauce.price))}
        </div>
  
      )
    }
  }
  
  const mapStateToProps = state => (
    console.log(state),{
    pizza: state.pizzas.pizza,
    ingredients: state.pizzas.pizza
  })
  
  export default connect(mapStateToProps, { createPizzaBase, createPizzaSauce })(PizzaCreatorContainer)


/**
 * 
 *             <h2>{this.props.pizza}</h2>
                <h3>{this.props.pizza.ingredientes.base.name}</h3>
                <h3>{this.props.pizza.ingredientes.base.price}</h3>
            <h2>{this.props.pizza}</h2>
                <h3>{this.props.pizza.ingredientes.sauce.name}</h3>
                <h3>{this.props.pizza.ingredientes.sauce.price}</h3>
 */
