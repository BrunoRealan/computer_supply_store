let productos = [{
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2020/10/2_500-1-300x300.jpg",
    title: "LG 20MK400H 20″",
    description: "Es un buen monitor gamer.",
    price: 150,
},
{
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2018/02/s-390-300x300.png",
    title: "Samsung Curvo C24F390FHL 24″",
    description: "Es el mejor monitor gamer que tenemos.",
    price: 225,
},
{
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2022/03/1amda-300x300.jpg",
    title: "Equipo AMD Athlon 3000G Radeon™ Vega 3 Graphics",
    description: "Una muy buena PC, Procesador AMD Athlon 3000G 3,5Ghz 2 núcleos _ 4 hilos, Memoria 8Gb DDR4...",
    price: 370,
},
{
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2022/01/nx800ryz-300x300.jpg",
    title: "Equipo AMD Ryzen 9 5900X Full Gamer 32gb",
    description: "La mejor pc gamer que disponemos, Procesador AMD Ryzen 9 5900X 12 núcleos, Memoria 32Gb DDR4...",
    price: 3500,
},
{
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2019/01/3346647pro_1e882c7f407a4fd2bcc846a6691947c7-300x300.jpg",
    title: "Mouse Logitech PRO HERO",
    description: "Exelente Mouse especial para juegos shooter...",
    price: 40.99,
},
{
    img: "https://thotcomputacion.com.uy/wp-content/uploads/2019/11/g502-inal-300x300.png",
    title: "Mouse Logitech G502 Lightspeed Wireless",
    description: "Exelente Mouse inalámbrico especial para juegos shooter, es el mouse que eligen quienes juegan en serio....",
    price: 111,
},
]

let cards = document.getElementById("cards")

for (let i = 0; i < productos.length; i++) {
    cards.innerHTML += `
        <div class="card m-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${productos[i].img} class="img-fluid rounded-start" alt="Monitor gamer.">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title">${productos[i].title}</h5>
                        <p class="card-text">${productos[i].description}</p>
                        <p class="card-text"><small class="text-muted"><id="price">US$${productos[i].price}</p>
                        <button type="button" class="btn-sm btn-success">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    `
}

/* const calcularPesos = () => {
    let montoDolar = document.getElementById ("montoDolar").value;
    let total = document.getElementById ("total");

    let valorPesosUy = 42;
    let iva = +montoDolar * (24/100)   
    let impCompraPesos = +montoDolar * (5 / 100);

    montoDolar = valorPesosUy * +montoDolar + iva + impCompraPesos

    total.innerHTML = `
        <h3>Tienes que pagar UY$${montoDolar} pesos Uruguayos</h3>
        `
} */

const calcular = () => {
    let price = document.getElementById("price").value;
    let total = document.getElementById("total")

    let valorPesosUy = 42;
    let impCompraPesos = +price * (5 / 100);

    price = valorPesosUy * +price + impCompraPesos

    total.innerHTML = `
        <h5>La compra te saldrá ${price} pesos uruguayos.</h5>
    `
}