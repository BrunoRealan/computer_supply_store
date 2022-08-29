//Variables con elementos del DOM
let cartHtml = document.getElementById("cartHtml"),
    btnPlus = document.getElementsByClassName("btnMinus"),
    btnMinus = document.getElementsByClassName("btnPlus"),
    unitsNumber = document.getElementsByClassName("unitsNumber"),
    canvasSubtitle = document.getElementById("canvasSubtitle"),
    form = document.getElementById("form"),
    formBtn = document.getElementById("formBtn");

//Array de Productos (Guarda el Fetch al cargar DOM)
let products = [];

//Array Carrito (Está vacío o lo trae del LocalStorage)
let cart = JSON.parse(localStorage.getItem("Cart")) || [];

//Función Fetch (Async)
function fetchData() {
    fetch("https://brunorealan.github.io/computer_supply_store/json/products.json")
        .then((response) => response.json())
        .then((data) => products = data)
        .then((products) => showProducts(products));
}

//Función para renderizar productos
function showProducts(array) {
    let products = "";
    array.forEach((product) => {
        products += `
            <div class="col">
                <div class="card">
                    <img src=${product.img} class="card-img-top p-4"
                        alt=${product.name}>
                    <div class="card-body text-center">
                        <h3 class="card-name">${product.name}</h3>
                        <h4 class="card-text">${product.description}</h4>
                        <h3 class="card-text text-success">US$ ${product.price}</h3>
                        <p class="card-text"><small class="text-muted">En Stock: ${product.stock}</small></p>
                        <button type="button" class="btn btn-outline-danger" onclick="addToCart(${product.id})">Agregar al Carrito</button>
                    </div>
                </div>
            </div>`;
        document.getElementById("cards").innerHTML = products;
    });
}

//Función para el buscador de productos (Fuse.js)
function showBySearch() {
    let searchValue = form.value;
    const fuse = new Fuse(products, {
        threshold: 0.3,
        keys: ['name', 'type'],
    })

    const results = fuse.search(searchValue);
    function showProduct(array) {
        let products = "";
        array.forEach((product) => {
            products += `
                <div class="col">
                    <div class="card">
                        <img src=${product.item.img} class="card-img-top p-4"
                            alt=${product.item.name}>
                        <div class="card-body text-center">
                            <h3 class="card-name">${product.item.name}</h3>
                            <h4 class="card-text">${product.item.description}</h4>
                            <h3 class="card-text text-success">US$ ${product.item.price}</h3>
                            <p class="card-text"><small class="text-muted">En Stock: ${product.item.stock}</small></p>
                            <button type="button" class="btn btn-outline-danger" onclick="addToCart(${product.item.id})">Agregar al Carrito</button>
                        </div>
                    </div>
                </div>`,

                document.getElementById("cards").innerHTML = products;
        });
    }
    showProduct(results);
}

//Funciones para organizar productos según categoría
function sortAToZ(array) {
    products = array.sort((a, b) => a.name.localeCompare(b.name));
    showProducts(products);
}

function sortZToA(array) {
    products = array.sort((a, b) => b.name.localeCompare(a.name));
    showProducts(products);
}

function sortMinusTo(array) {
    products = array.sort((a, b) => a.price - b.price);
    showProducts(products);
}

function sortMayorTo(array) {
    products = array.sort((a, b) => b.price - a.price);
    showProducts(products);
}

//Función que suma productos al carrito
function addToCart(id) {
    let idString = JSON.stringify(id);
    cartHtml.innerHTML = "";
    if (cart.some((e) => e.id === idString)) {
        changeNumberOfUnits("plus", id);
    } else {
        Swal.fire({
            title: "El articulo se agregó al carrito",
            icon: "success",
            showConfirmButton: false,
            timer: 1300
        });
        const product = products.find((e) => e.id === idString);
        cart.push({
            ...product,
            numberOfUnits: 1,
        });
    }
    updateCart();
}

//Función que actualiza el carrito
function updateCart() {
    renderCart();
    renderTotal();

    //Guardando carrito en LocalStorage
    localStorage.setItem("Cart", JSON.stringify(cart));
}

//Función que renderiza el carrito
function renderCart() {
    cartHtml.innerHTML = "";
    cart.forEach((product) =>
        cartHtml.innerHTML += `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-4">
                    <img src=${product.img} class="img-fluid rounded-start p-2" onclick="removeProduct(${product.id})" alt=${product.name}>
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h6 class="card-title">${product.name}</h6>
                        <p class="card-text"><small class="text">En Stock: ${product.stock}</small></p>
                        <p class="card-text"><small class="text">US$ ${product.price}</small></p>
                        <div class="units">
                            <button type="button" class="btnMinus btn-warning btn-sm" onclick="changeNumberOfUnits('minus',${product.id})">-</button>
                            <div class="number unitsNumber">${product.numberOfUnits}</div>
                            <button type="button" class="btnPlus btn-warning btn-sm" onclick="changeNumberOfUnits('plus',${product.id})">+</button>          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}

//Función que calcula y renderiza total en el carrito
function renderTotal() {
    let totalPrice = 0;
    let totalPricePesos = 0;
    let totalProducts = 0;
    let valuePeso = 42.35;
    cart.forEach((product) => {
        totalPrice += product.price * product.numberOfUnits;
        totalPricePesos += (product.price * product.numberOfUnits) * valuePeso;
        totalProducts += product.numberOfUnits;
    });
    canvasSubtitle.innerHTML = `
        <div class="all-p-cart">
            <p class="p-cart">Tienes (${totalProducts}) items en el carrito.</p>
            <p class="p-cart">La compra en dolares es: <strong>US$ ${totalPrice.toFixed(2)}</strong></p>
            <p class="p-cart">O en pesos uruguayos: <strong>UYU$ ${Math.round(totalPricePesos)}</strong></p>
        </div>
        <div class="cartBuyBtn">
            <button class="btn btn-warning btn-sm" onclick="buyCart(cart)" type="button">Comprar</button>
        </div>
        `;
}

//Funcíon que retira un producto del carrito
function removeProduct(id) {
    let idString = JSON.stringify(id);
    Swal.fire({
        title: "¿Está seguro/a?",
        text: "¿Quiere eliminar el producto del carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#e53446",
        cancelButtonColor: "#018657",
        confirmButtonText: "Quitar producto",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            cart = cart.filter((product) => product.id !== idString)
            Swal.fire({
                title: "¡Eliminado!",
                text: "El artículo se borró del carrito",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            });
            updateCart();
        }
    });
}

//Funcion que cambia el numero de unidades de un producto del carrito 
function changeNumberOfUnits(action, id) {
    cartHtml.innerHTML = "";
    cart = cart.map((product) => {
        let idString = JSON.stringify(id);
        let stockNumber = parseInt(product.stock);

        if (product.id === idString) {
            if (action === "plus" && product.numberOfUnits < stockNumber) {
                product.numberOfUnits++;
            } else if (action === "minus" && product.numberOfUnits > 1) {
                product.numberOfUnits--;
            }
        }
        return {
            ...product,
        };
    }),
        updateCart();
}

//Función del Boton Comprar del carrito
function buyCart(array) {
    if (array.length === 0) {
        swal.fire({
            icon: "error",
            title: "Error!",
            text: "No tienes productos en el carrito",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        cart = [];
        swal.fire({
            icon: "success",
            title: "La compra fue un éxito",
            text: "¡Puedes seguir comprando si lo deseas!",
            confirmButtonColor: "#018657",
            timer: 2500
        });
        updateCart();
    }
}

//Escuchadores de Eventos
window.addEventListener("DOMContentLoaded", fetchData());
window.addEventListener("DOMContentLoaded", updateCart());
formBtn.addEventListener("click", () => showBySearch());
document.getElementById("sortAToZ").addEventListener("click", () => sortAToZ(products));
document.getElementById("sortZToA").addEventListener("click", () => sortZToA(products));
document.getElementById("sortMinusTo").addEventListener("click", () => sortMinusTo(products));
document.getElementById("sortMayorTo").addEventListener("click", () => sortMayorTo(products));