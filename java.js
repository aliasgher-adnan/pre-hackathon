
var cart = [];
var cartContainer = document.getElementById('cartContainer');

function addToCart(productName, quantity) {
  // Check if the product is already in the cart
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].productName === productName) {
      cart[i].quantity += quantity;
      showCart();
      return;
    }
  }

  // Add the product to the cart
  cart.push({ productName: productName, quantity: quantity });
  showCart();
}

function showCart() {
  var cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';

  var totalAmount = 0;

  for (var i = 0; i < cart.length; i++) {
    var cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = '<span>' + cart[i].productName + '</span><span>' + cart[i].quantity + '</span>';
    cartItems.appendChild(cartItem);

    totalAmount += cart[i].quantity;
  }

  document.getElementById('totalAmount').textContent = '$' + totalAmount.toFixed(2);
}

function toggleCart() {
  cartContainer.classList.toggle('cart-open');
}

function proceedToCheckout() {
  // Perform any additional operations or navigate to the checkout page
  console.log('Proceed to Checkout');
}


