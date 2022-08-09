//Variables de elementos capturados del DOM
let cartHtml = document.getElementById("cartHtml"),
    btnPlus = document.getElementsByClassName("btnMinus"),
    btnMinus = document.getElementsByClassName("btnPlus"),
    canvasSubtitle = document.getElementById("canvasSubtitle");

//Array de Productos
let products = [{
    id: 0,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2020/10/2_500-1-300x300.jpg",
    name: "Monior LG 20MK400H 20″",
    type: "monitores",
    description: "Es un buen monitor para todo tipo de usos.",
    stock: 7,
    price: 150,
},
{
    id: 1,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2018/02/s-390-300x300.png",
    name: "Monitor Samsung Curvo C24F390FHL 24″",
    type: "monitores",
    description: "Es un buen monitor gamer confiable.",
    stock: 4,
    price: 225,
},
{
    id: 2,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2022/06/3153_1_596e489d69f24246890787966100f846-300x300.jpg",
    name: "Monitor Cooler Master GM34-CW2 UWQHD 1440p 144hz",
    type: "monitores",
    description: "La pantalla ultra ancha de 34″ ofrece un juego inigualable y una experiencia cinematográfica sorprendente.",
    stock: 5,
    price: 890,
},
{
    id: 3,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2017/04/960-000582_22_1600x1600_818d72705aa44e9091b43d4f83fe1263-300x300.jpg",
    name: "Webcam Logitech C270",
    type: "webcam",
    description: "Tecnología Logitech Fluid Crystal™. Para hacer mejores las cámaras Web Logitech. Vídeo más fluido, imágenes más nítidas, colores más vivos y sonido más claro en condiciones reales.",
    stock: 6,
    price: 35.99,
},
{
    id: 4,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2017/05/c920e-300x300.jpg",
    name: "Webcam Logitech C920e",
    type: "webcam",
    description: "Conéctate con tu gente usando Full HD 1080p en Skype, o HD 720p de gran fluidez en FaceTime para Mac. También puedes tener videoconferencias de alta calidad usando Google Hangouts™ y clientes de videoconferencias.",
    stock: 7,
    price: 104.99,
},
{
    id: 5,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2021/05/71xCcwQ0aPL._AC_SS450_64310_ba466f3906ae40fb94c61fa5b3a2b552-300x300.jpg",
    name: "Webcam Razer Kiyo PRO",
    type: "webcam",
    description: "Logre estándares de video profesional para transmisión y videoconferencia con Razer Kiyo Pro, una cámara web USB FHD que tiene un sensor de luz adaptativo de alto rendimiento.",
    stock: 4,
    price: 198.99,
},
{
    id: 6,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2022/03/1amda-300x300.jpg",
    name: "Equipo AMD Athlon 3000G Radeon™ Vega 3 Graphics",
    type: "equipos",
    description: "Con procesador AMD Athlon 3000G 3,5Ghz, Memoria 8Gb DDR4...",
    stock: 6,
    price: 370,
},
{
    id: 7,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2022/01/nx800ryz-300x300.jpg",
    name: "Equipo AMD Ryzen 9 5900X Full Gamer 32gb",
    type: "equipos",
    description: "Con procesador AMD Ryzen 9 5900X, Memoria 32Gb DDR4...",
    stock: 3,
    price: 3500,
},
{
    id: 8,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2019/01/3346647pro_1e882c7f407a4fd2bcc846a6691947c7-300x300.jpg",
    name: "Mouse Logitech PRO HERO",
    type: "Mouses",
    description: "Exelente Mouse especial para juegos shooter...",
    stock: 14,
    price: 40.99,
},
{
    id: 9,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2019/11/g502-inal-300x300.png",
    name: "Mouse Logitech G502 Lightspeed Wireless",
    type: "Mouses",
    description: "Exelente Mouse inalámbrico especial para juegos shooter.",
    stock: 9,
    price: 111,
},
{
    id: 10,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2021/10/ns158665_9a7f744fbfb4454884dcaec407b8ef12-300x300.jpg",
    name: "Nintendo Switch Animal Crossing: New Horizons Edition",
    type: "Consolas",
    description: "Este sistema Nintendo Switch se inspira en el diseño del nuevo juego Animal Crossing: New Horizons.",
    stock: 5,
    price: 550,
},
{
    id: 11,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2022/01/NSOL4915_15ab859551cd4b7ebf99e48b9df3a2b4-300x300.jpg",
    name: "Nintendo Switch Modelo OLED",
    type: "Consolas",
    description: "Cuenta con una vibrante pantalla OLED de 7 pulgadas (17.78 cm), un soporte ajustable y amplio.",
    stock: 3,
    price: 650,
},
{
    id: 12,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2021/11/xbx93033_ce586eb4263a4b029491fc27138d79d0-300x300.jpg",
    name: "Microsoft Xbox Serie X",
    type: "Consolas",
    description: "La consola más potente de esta nueva generación, hasta 120 Cuadros por segundo.",
    stock: 9,
    price: 1000,
},
{
    id: 13,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2022/08/4848_1865172668bce4ba0be1acbf7c01d8d5d-300x300.webp",
    name: "Sony PlayStation 5 Digital Horizon Edition",
    type: "Consolas",
    description: "Disfruta de la potencia de una CPU, una GPU y una SSD personalizadas con E/S integradas que redefinirán lo que una consola PlayStation puede hacer.",
    stock: 7,
    price: 1300,
},
{
    id: 14,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2022/05/3986_2_1c3fe20121cc4a00ab61e429ef87e847-300x300.png",
    name: "GPU EVGA Geforce RTX 3080 FTW3 ULTRA 12Gb GDDR6X",
    type: "Tarjetas Gráficas",
    description: "Exelente tarjeta gráfica con tecnología Ray Tracing® de Nvidia.",
    stock: 2,
    price: 1950,
},
{
    id: 15,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2021/06/670041897_8f411624da3f4038bca7a07aed637f86-300x300.jpg",
    name: "GPU MSI Radeon RX6700 XT GAMING X 12G",
    type: "Tarjetas Gráficas",
    description: "12GB de memoria GDDR6 dedicada, proyectadas para ofrecer FPS ultra altos y el juego poderoso con resolución 1440p.",
    stock: 4,
    price: 1290,
},
{
    id: 16,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2021/08/canon44223_dc350658f0de4be8a03a0c717278915f-300x300.jpg",
    name: "Impresora Multifunción Canon MG2410",
    type: "Impresoras",
    description: "Si desea imprimir fotografías de calidad y documentos nítidos, la impresora multifuncional de inyección de tinta PIXMA MG2410 es la impresora para usted.",
    stock: 18,
    price: 56,
},
{
    id: 17,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2022/02/41525140_4dca952349a7434480f393538c694529-300x300.jpg",
    name: "Impresora Multifunción HP Ink Tank Wireless 415",
    type: "Impresoras",
    description: "Imprima fácilmente grandes volúmenes con un costo por página muy bajo y obtenga una impresión móvil sencilla.",
    stock: 13,
    price: 250,
},
{
    id: 18,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2021/12/hh115n36636_dad301c2f11345a2a5770927a62194bd-300x300.jpg",
    name: "Silla HHGears SM115 Black",
    type: "Sillas gamer",
    description: "Buena silla gamer que te dará horas de juegos ininterrumpidas.",
    stock: 8,
    price: 164.99,
},
{
    id: 19,
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2021/12/cargo60930_79797f1c8387484686df5562783eff88-300x300.jpg",
    name: "Silla Cougar Argo Orange",
    type: "Sillas gamer",
    description: "construida con un marco de aluminio de primera calidad. Contiene una almohadilla de malla altamente transpirable que ofrece el máximo apoyo duradero para una experiencia de juego más cómoda.",
    stock: 2,
    price: 774.99,
}];

//Arrays vacio de utilidad
let newArray = [];

//Array Carrito
let cart = JSON.parse(localStorage.getItem("Cart")) || [];
updateCart();

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
                        <h5 class="card-name">${product.name}</h5>
                        <h6 class="card-text">${product.description}</h6>
                        <h5 class="card-text text-danger">US$ ${product.price}</h5>
                        <p class="card-text"><small class="text-muted">En Stock: ${product.stock}</small></p>
                        <button type="button" class="btn btn-outline-primary" onclick="addToCart(${product.id})">Agregar al Carrito</button>
                    </div>
                </div>
            </div>`,

            document.getElementById("cards").innerHTML = products;
    });
}

//Funciones para organizar productos según categoría
function forAToZ(array) {
    newArray = array.sort((a, b) => a.name.localeCompare(b.name));
    showProducts(newArray);
}

function forZToA(array) {
    newArray = array.sort((a, b) => b.name.localeCompare(a.name));
    showProducts(newArray);
}

function forMinusTo(array) {
    newArray = array.sort((a, b) => a.price - b.price);
    showProducts(newArray);
}

function forMayorTo(array) {
    newArray = array.sort((a, b) => b.price - a.price);
    showProducts(newArray);
}

//Función que suma productos al carrito
function addToCart(id) {
    cartHtml.innerHTML = "";
    if (cart.some((product) => product.id === id)) {
        changeNumberOfUnits("plus", id);
    } else {
        const product = products.find((product) => product.id === id)
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
                            <button type="button" class="btnMinus" onclick="changeNumberOfUnits('minus',${product.id})">-</button>
                            <div class="number">${product.numberOfUnits}</div>
                            <button type="button" class="btnPlus" onclick="changeNumberOfUnits('plus',${product.id})">+</button>          
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
            <button id="buyCartBtn" type="button">Comprar!</button>
        </div>
        `
    //Intentaba usar onclick="buyCart(${cart})" 
    //Intentaba usar onclick="buyCart(${cart})" 
    //Intentaba usar onclick="buyCart(${cart})" 
}

//Funcíon que retira un producto del carrito
function removeProductFromCart(id) {
    cart = cart.filter((product) => product.id !== id)
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
            title: "Carrito Vacío",
            text: "Necesitas tener productos en el carrito antes de comprar",
        })
    } else {
        for (const item of array) {
            console.log(item);
            /* if (item.id == products.id) {
                products.stock-- */
        }
        cart = [];
        //alert("La compra a sido realizada");
        swal.fire({
            icon: "success",
            title: "La compra realizada",
            text: "Puedes seguir comprando si lo deseas!",
        })
        updateCart();
    }
}

//Escuchadores de Eventos
document.getElementById("buyCartBtn").addEventListener("click", () => buyCart(cart));
document.getElementById("forAToZ").addEventListener("click", () => forAToZ(products));
document.getElementById("forZToA").addEventListener("click", () => forZToA(products));
document.getElementById("forMinusTo").addEventListener("click", () => forMinusTo(products));
document.getElementById("forMayorTo").addEventListener("click", () => forMayorTo(products));