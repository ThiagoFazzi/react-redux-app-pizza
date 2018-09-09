import React from 'react'
import {connect} from 'react-redux'
import { loadAllSauces } from '../actions/ingredientsAction'
import { createPizzaSauce, updatePrice } from '../actions/pizzaAction'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

class ListSaucesContainer extends React.PureComponent {
 
  componentDidMount() {
    this.props.loadAllSauces()
  }

  onChangeSauce = (sauce) => {
    this.props.createPizzaSauce(sauce)
    this.props.updatePrice(this.props.pizzaOrder)
  }

  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {

    if(!this.props.sauces) return <p>Loading...</p>
    if(!this.props.sauce === undefined) return <p>Loading...</p>  
    return (
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Choose one Sauce</FormLabel>
            <RadioGroup
              aria-label="Sauce"
              name="sauce"
              value={this.state.value}
              onChange={this.handleChange}
            >
            {this.props.sauces.map(sauce =>
              <FormControlLabel 
                key={sauce.id}
                value={sauce.name} 
                control={<Radio onClick={() => this.onChangeSauce(sauce)}/>} 
                label={`${sauce.name} - € ${sauce.price}`} />
                
            )}
            </RadioGroup>
          </FormControl>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    sauces: state.sauces,
    sauce: state.pizzas.pizza.sauce,
    pizzaOrder: state.pizzas.pizza
})

export default connect(mapStateToProps, { loadAllSauces, createPizzaSauce, updatePrice })(ListSaucesContainer)