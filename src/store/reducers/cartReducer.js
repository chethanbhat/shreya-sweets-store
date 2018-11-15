const initState = {}

const cartReducer = (state = initState, action) => {
  switch(action.type){
    case 'ADD_TO_CART': 
      console.log('Product added to cart');
      return state;
    case 'ADD_TO_CART_ERROR': 
      console.log('Problem adding to cart', action.err);
      return state;      
    case 'REMOVE_FROM_CART': 
      console.log('Product removed from cart');
      return state;
    case 'REMOVE_FROM_CART_ERROR': 
      console.log('Problem removing from cart', action.err);
      return state;       
    case 'EMPTY_CART': 
      console.log(action.message);
      return state;
    case 'EMPTY_CART_ERROR': 
      console.log('Cart cannot be reset', action.err);
      return state;      
    case 'PROCESS_CART': 
      console.log('Your order has been processed !');
      return state;  
    case 'PROCESS_CART_ERROR': 
      console.log('Problem processing your order', action.err);
      return state;                             
    default:
      return state;
  }
}

export default cartReducer;