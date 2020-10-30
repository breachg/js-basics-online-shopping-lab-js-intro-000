var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObj = {itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)}
 cart.push(itemObj);
 return (`${item} has been added to your cart.`)

}

function viewCart() {
 if (cart == 0) {
   return ('Your shopping cart is empty.')}
   else if ( cart == 1){
     return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
   } else if (cart == 2){
     return( `In your cart, you have ${itemName[0]} at $${itemPrice[0]}, and ${itemName[1]} at $${itemPrice[1]}.`)
   } else {
     var string = "In your cart, you have "
     for (i =0; i < cart.length -1; i++) {
       string = string +`${itemName[i]} at $${itemPrice[i]},`
     }
     return string + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
   }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
