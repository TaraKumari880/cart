




function updateQuantity(button, change) {
var quantitySpan = button.nextElementSibling;
var quantity = parseInt(quantitySpan.textContent);
var productId = quantitySpan.id.split('-')[1];

if (quantity + change >= 0) {
quantity += change;
quantitySpan.textContent = quantity;
updateCart(productId, quantity);
}
}

function updateCart(productId, quantity) {
var cartItems = document.getElementById('cart-items');
var cartItem = document.querySelector(`#cart-item-${productId}`);

if (quantity > 0) {
if (cartItem) {
// Update existing item
cartItem.querySelector('span').textContent = quantity;
} else {
// Add new item
var price = document.querySelector(`#quantity-${productId}`).previousElementSibling.textContent;
var itemHTML = `
<div id="cart-item-${productId}">
  Product-${productId}: <span>${quantity}</span> × ${price}
</div>
`;
cartItems.innerHTML += itemHTML;
}
} else {
// Remove item
if (cartItem) {
cartItems.removeChild(cartItem);
}
}

updateTotalPrice();
}

function updateTotalPrice() {
var totalPrice = 0;
var cartItems = document.querySelectorAll('#cart-items div');
cartItems.forEach(item => {
var quantity = parseInt(item.querySelector('span').textContent);
var price = parseInt(item.textContent.split('x')[1].trim());
totalPrice += quantity * price;
});

document.getElementById('total-price').textContent = totalPrice;
}

// Initialize the cart
updateCart(1, 2);
updateCart(2, 3);












