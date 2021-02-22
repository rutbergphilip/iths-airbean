
import * as Data from './menu.json'

export async function fetchProducts(){

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Data.menu)
    }, 1000)
  })

  // Resolve the products from menu.json after a random timer
}

export async function registerUser(name, email){


  const id = Date.now();
  const user = {name, email, id};
  localStorage.setItem('userInfo', JSON.stringify(user))

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(user)
    }, 1000)

  })
}

export async function makeOrder(userId, cardItems){

  
  const order =  cardItems;
  order.eta = 14;
  localStorage.setItem(userId, JSON.stringify(order));

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(order)
    }, 1000)

  })

  
  // Resolve with a orderId, order total price and ETA after a random timer
  // Persist order coupled userId in an array in localStorage
}

// export async function fetchOrderHistory(userId){
//   Resolve an array of orders after a random timer
// }