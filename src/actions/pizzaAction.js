export const PIZZA_CREATOR = 'PIZZA_CREATOR'
//export const ALL_SAUCES_FETCHED = 'ALL_SAUCES_FETCHED'
//export const ALL_TOPPINGS_FETCHED = 'ALL_TOPPINGS_FETCHED'

//Actions Creators

const pizzaCreator = ingredient => ({
  type: PIZZA_CREATOR,
  ingredient
})

//Dispatch Actions

export const createPizza= () => (dispatch, getState) => {
  //if (getState().pizzas) return 
     
    const ingredient = {
      base: {
        id: 2,
        name: '30cm NY Style',
        price: 11.49
      }
      /*
      sauce: {
        id: 2,
        name: 'Red sauce',
        price: 1.00
      },
      toppings: [
        {
          id: 1,
          name: 'Pineapple',
          price: 0.50
        },
        {
          id: 3,
          name: 'Olives (green)',
          price: 0.50
        },
        {
          id: 6,
          name: 'Cherry tomatoes',
          price: 0.50
        },
      ],
      total: '20.00'
      */
    }
    dispatch(pizzaCreator(ingredient))
}

export const createPizza1= () => (dispatch, getState) => {
  //if (getState().pizzas) return 
     
    const ingredient = {
      /*
      base: {
        id: 2,
        name: '30cm NY Style',
        price: 11.49
      }
      */
      sauce: {
        id: 2,
        name: 'Red sauce',
        price: 1.00
      }
      /*
      toppings: [
        {
          id: 1,
          name: 'Pineapple',
          price: 0.50
        },
        {
          id: 3,
          name: 'Olives (green)',
          price: 0.50
        },
        {
          id: 6,
          name: 'Cherry tomatoes',
          price: 0.50
        },
      ],
      total: '20.00'
    */
   }
    dispatch(pizzaCreator(ingredient))
}