import React from 'react'
import {connect} from 'react-redux'
import { loadAllBases } from '../actions/ingredientsAction'
import { createPizzaBase, updatePrice } from '../actions/pizzaAction'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'

class ListBasesContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadAllBases()
  }

  state = {
    checked: [1],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };




  onChangeBase = (base) => {
    this.props.createPizzaBase(base)
    this.props.updatePrice(this.props.pizzaOrder)
  }

  render() {

    if(!this.props.bases) return <p>Loading...</p>
    if(!this.props.base === undefined) return <p>Loading...</p>  
    return (
        <div>
            <List>
            {this.props.bases.map(base =>
              <ListItem key={base.id}>
                <Avatar src={base.image}/>
                <ListItemText primary={base.name} secondary={base.price} />
                <ListItemSecondaryAction>
                  <Button onClick={() => this.onChangeBase(base)}>Select</Button>
                </ListItemSecondaryAction>
              </ListItem>
            )}
            </List>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  bases: state.bases,
  base: state.pizzas.pizza.base,
  pizzaOrder: state.pizzas.pizza
})

export default connect(mapStateToProps, { loadAllBases, createPizzaBase, updatePrice })(ListBasesContainer)