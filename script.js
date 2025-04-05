const cart = [];

function addToCart(productName, price) {
  cart.push({ productName, price });
  displayCart();
}

function displayCart() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.productName} - $${item.price}`;
    cartElement.appendChild(li);
  });
}
