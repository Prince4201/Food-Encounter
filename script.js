let cart = [];

function toggleCart() {
    alert(`Your cart has ${cart.length} items.`);
}
// Open Cart Modal
function openCart() {
    document.getElementById('cartModal').style.display = 'block';
    updateCartDisplay();
}

// Close Cart Modal
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Add to Cart Function
function addToCart(productName, price) {
    const item = { productName, price };
    cart.push(item);
    updateCartCount();
}

// Update Cart Count
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Update Cart Display in Modal
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.productName} - Rs${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById('cart-total').innerText = total;
}

// Checkout Function
function checkout() {
    if (cart.length > 0) {
        alert(`Thank you for your purchase! Total amount: Rs${document.getElementById('cart-total').innerText}`);
        cart = []; // Clear the cart after checkout
        closeCart();
        updateCartCount();
    } else {
        alert('Your cart is empty');
    }
}


// function addToCart(itemName, itemPrice) {
//     cart.push({ name: itemName, price: itemPrice });
//     document.getElementById("cart-count").innerText = cart.length;
//     alert(`${itemName} has been added to your cart!`);
// }

function scrollToMenu() {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
        menuElement.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error("Menu element not found!");
    }
}

function sendMessage(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thank you for contacting us, ${name}! We’ll get back to you soon.`);
}
