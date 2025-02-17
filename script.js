const products = [
    { id: 1, name: "Refined Soyabean Oil - Solo", price: 100, image: "https://i.imgur.com/ofvBReo.jpg" },
    { id: 2, name: "Refined Soyabean Oil - Combo", price: 195, image: "https://i.imgur.com/qiqFJeO.jpg" },
];

const productContainer = document.getElementById("products");

products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<img src="\${product.image}" width="150"><h3>\${product.name}</h3><p>₹\${product.price}</p>
                     <button onclick="buyNow(\${product.id})">Buy Now</button>`;
    productContainer.appendChild(div);
});

function buyNow(id) {
    const product = products.find(p => p.id === id);
    document.getElementById("checkout").classList.remove("hidden");
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = "₹" + product.price;
}

function confirmOrder() {
    alert("Order confirmed! Please send payment screenshot.");
}
