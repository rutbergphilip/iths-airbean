export async function fetchProducts(){
  // Resolve the products from menu.json after a random timer
}

export async function registerUser(name, email){

  const userInfo = {};
  userInfo.id = Date.now();
  userInfo.name = name;
  userInfo.email = email;

  // Resolve a random generated ID after a random timer
  // Persist user in localStorage
}

export async function makeOrder(userId, cardItems){
  // Resolve with a orderId, order total price and ETA after a random timer
  // Persist order coupled userId in an array in localStorage
}

export async function fetchOrderHistory(userId){
  // Resolve an array of orders after a random timer
}