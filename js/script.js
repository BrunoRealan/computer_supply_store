//Variables de elementos capturados del DOM
let cartHtml = document.getElementById("cartHtml"),
    btnPlus = document.getElementsByClassName("btnMinus"),
    btnMinus = document.getElementsByClassName("btnPlus"),
    unitsNumber = document.getElementsByClassName("unitsNumber"),
    canvasSubtitle = document.getElementById("canvasSubtitle"),
    form = document.getElementById("form"),
    formBtn = document.getElementById("formBtn");

//Array de Productos
let products = [];

//Array Carrito
let cart = JSON.parse(localStorage.getItem("Cart")) || [];

//Función Fetch
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
            </div>`,

            document.getElementById("cards").innerHTML = products;
    });
}

function showBySearch() {
    let searchValue = form.value;
    const fuse = new Fuse(products, {
        keys: ['name', 'type']
    })

    const results = fuse.search(searchValue);

    showProducts(results)
    console.log("results", results);
}

//Funciones para organizar productos según categoría
function forAToZ(array) {
    products = array.sort((a, b) => a.name.localeCompare(b.name));
    showProducts(products);
}

function forZToA(array) {
    products = array.sort((a, b) => b.name.localeCompare(a.name));
    showProducts(products);
}

function forMinusTo(array) {
    products = array.sort((a, b) => a.price - b.price);
    showProducts(products);
}

function forMayorTo(array) {
    products = array.sort((a, b) => b.price - a.price);
    showProducts(products);
}

//Función que suma productos al carrito
function addToCart(id) {
    cartHtml.innerHTML = "";
    if (cart.some((e) => e.id === id)) {
        changeNumberOfUnits("plus", id);
    } else {
        Swal.fire({
            icon: 'success',
            title: 'El articulo se agregó al carrito',
            showConfirmButton: false,
            timer: 1300
        });
        const product = products.find((e) => e.id === id)
        console.log(product);
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
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-4">
                    <img src=${product.img} class="img-fluid rounded-start p-2" onclick="removeProductFromCart(${product.id})" alt=${product.name}>
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h6 class="card-title">${product.name}</h6>
                        <p class="card-text"><small class="text">En Stock: ${product.stock}</small></p>
                        <p class="card-text"><small class="text">US$ ${product.price}</small></p>
                        <div class="units">
                            <button type="button" class="btnMinus btn btn-warning btn-sm" onclick="changeNumberOfUnits('minus',${product.id})">-</button>
                            <div class="number unitsNumber">${product.numberOfUnits}</div>
                            <button type="button" class="btnPlus btn btn-warning btn-sm" onclick="changeNumberOfUnits('plus',${product.id})">+</button>          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)
}

//Función que calcula total en carrito (btn de compra no funciona aún)
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
            <p class="p-cart">El total de la compra en dolares es: US$ ${totalPrice.toFixed(2)}</p>
            <p class="p-cart">O en pesos uruguayos: $ ${Math.round(totalPricePesos)}</p>
        </div>
        <div class="cartBuyBtn">
            <button onclick="buyCart(cart)" type="button">Comprar!</button>
        </div>
        `
}

//Funcíon que retira un producto del carrito
function removeProductFromCart(id) {
    cart = cart.filter((product) => product.id !== id)
    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'El articulo se borró del carrito',
        showConfirmButton: false,
        timer: 1500
    })
    updateCart()
}

//Funcion cambio de numero de unidades en el carrito 
function changeNumberOfUnits(action, id) {
    cartHtml.innerHTML = "";
    cart = cart.map((product) => {
        let numberOfUnits = product.numberOfUnits;

        if (product.id === id) {
            if (action === "plus" && numberOfUnits < product.stock) {
                numberOfUnits++;
            } else if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            }
        }
        return {
            ...product,
            numberOfUnits,
        };
    }),
        updateCart();
}

//Función del Boton Comprar (necesito retirar si coincide id, numberOfUnits del mismo objeto del array "products"
function buyCart(array) {
    if (array.length === 0) {
        swal.fire({
            icon: "error",
            title: "Error!",
            text: "No tienes productos en el carrito",
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        let productsID = cart.map((product) => product.id);

        console.log(productsID);
        /*         let search = products.includes(productsID)
                if(search){
                    console.log("te encontre elemento");
                } */

        //console.log(productsID);
        cart = [];
        swal.fire({
            icon: "success",
            title: "La compra fue un éxito",
            text: "Puedes seguir comprando si lo deseas!",
        })
        updateCart();
    }
}

//Escuchadores de Eventos
window.addEventListener("DOMContentLoaded", fetchData());
window.addEventListener("DOMContentLoaded", updateCart());
formBtn.addEventListener("click", () => showBySearch());
document.getElementById("forAToZ").addEventListener("click", () => forAToZ(products));
document.getElementById("forZToA").addEventListener("click", () => forZToA(products));
document.getElementById("forMinusTo").addEventListener("click", () => forMinusTo(products));
document.getElementById("forMayorTo").addEventListener("click", () => forMayorTo(products));