// cart.js

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
  }
  
  function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(productName + " added to cart!");
  }
  
  // update cart count when page loads
  window.onload = updateCartCount;
  