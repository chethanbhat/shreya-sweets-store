export const addToCart = (product) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const userID = getState().firebase.auth.uid;
    firestore.collection('cart').doc(userID).collection('products').doc(product.id).set({
      ...product
    })
      .then(() => {
      dispatch({type: 'ADD_TO_CART', product})
    })
      .catch((err) => {
        dispatch({type: 'ADD_TO_CART_ERROR', err})
      })
    
  }
}

export const removeFromCart = (product) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const userID = getState().firebase.auth.uid;
    firestore.collection('cart').doc(userID).collection('products').doc(product.id).delete()
      .then(() => {
        dispatch({type: 'REMOVE_FROM_CART', product})
    })
      .catch((err) => {
        dispatch({type: 'REMOVE_FROM_CART_ERROR', err})
      })
  }
}

export const emptyCart = (products) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const userID = getState().firebase.auth.uid;
    console.log(products);
    const promises = products.map(async product => {
      const response = await firestore.collection('cart').doc(userID).collection('products').doc(product.id).delete()
      return response;
    });
    ;
    Promise.all(promises).then(() => {
      const message = 'Successfully emptied the cart';
      dispatch({type: 'EMPTY_CART', message})
    })
    .catch((err) => {
      dispatch({type: 'EMPTY_CART_ERROR', err})
    });
  }
}

export const processCart = (products) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const userID = getState().firebase.auth.uid;
    firestore.collection('orders').add({
      products,
      user: userID,
      status: 'processed'
    })
    .then((docRef) => {
      firestore.collection('users').doc(userID).update({
        orders: firestore.FieldValue.arrayUnion(docRef.id)
      })
    }).then(() => {
      dispatch({type: 'PROCESS_CART'})
    }).catch((err) => {
      dispatch({type: 'PROCESS_CART_ERROR', err})
    })
  }
}