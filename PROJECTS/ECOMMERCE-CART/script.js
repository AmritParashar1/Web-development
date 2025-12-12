document.addEventListener("DOMContentLoaded", ()=>{
    const product= [
        {id: 1,name: "Product 1",price : 19.99},
        {id: 2,name: "Product 2",price : 29.99},
        {id: 3,name: "Product 3",price : 59.99},
    ];

    const cart = []

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCart = document.getElementById("empty-cart");
    const cartTotal = document.getElementById("cart-total");
    const totalPrice = document.getElementById("total-price");
    const checkOutbtn = document.getElementById("checkout-btn");

    product.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add('product');

        productDiv.innerHTML = `
        <span>${product.name}-$${product.price.toFixed(2)}</span>
        <button class= "add-btn" data-id = "${product.id}">Add to cart</button>
        <button class = "remove-btn" data-id = "${product.id}">Remove from cart</button>
        `;

        productList.appendChild(productDiv);
    });


    productList.addEventListener("click", (e) => {
        const productId = parseInt(e.target.getAttribute("data-id"));
        const products = product.find(p => p.id === productId)

        if(e.target.classList.contains("add-btn")) {
            addToCart(products); 
        }
        else if(e.target.classList.contains("remove-btn")){
            removeFromCart(products);
        }
    });

    function addToCart(products) {
        cart.push(products);
        renderCart();
    }

    function removeFromCart(products) {
        const index = cart.findIndex(item => item.id == products.id);
        if(index !==-1) {
            cart.splice(index,1);
        } 

        renderCart();
    }
 
    function renderCart() {
        cartItems.innerHTML = "";
        let totalPrices = 0;

        if(cart.length > 0) {

            emptyCart.classList.add("hidden");
            cartTotal.classList.remove("hidden");
            

            cart.forEach((item,index) => {
                totalPrices += item.price;

            const cartItem =   document.createElement("div")

            cartItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            `
            cartItems.appendChild(cartItem);
            totalPrice.textContent = `${totalPrices.toFixed(2)}`;
            
            })

        } else {
            emptyCart.classList.remove("hidden");
            totalPrice.textContent = `$0.00`
            
        }
    }

    checkOutbtn.addEventListener("click", () => {
        cart.length = 0;
        alert("CheckOut successfully")
        renderCart();
    })

});