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

let cards = document.getElementById("cards");

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
                        <p class="card-text" id="price${i}"><small class="text-muted">${productos[i].price}</p>
                        <button type="button" class="btn-sm btn-success">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    `
}

document.getElementById("show").addEventListener("click", function organize() {
    var order = parseInt(document.getElementById("order").value);
    let newOrder = document.getElementById("newOrder");
    let newArray = [...productos];

    switch (order) {

        case 1:
            newArray = newArray.sort((a, b) => a.title.localeCompare(b.title));
            break

        case 2:
            newArray = newArray.sort((a, b) => b.title.localeCompare(a.title));
            break;

        case 3:
            newArray = newArray.sort((a, b) => a.price - b.price);
            break;

        case 4:
            newArray = newArray.sort((a, b) => b.price - a.price);
            break;

        default:
            alert("No se puede ordernar, no elegiste un criterio válido")
            break;
    }

    if (order = 1 || 2 || 3 || 4) {
        for (let i = 0; i < newArray.length; i++) {
            newOrder.innerHTML += `
        <div class="card m-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${newArray[i].img} class="img-fluid rounded-start" alt="Monitor gamer.">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title">${newArray[i].title}</h5>
                        <p class="card-text">${newArray[i].description}</p>
                        <p class="card-text" id="price${i}"><small class="text-muted">${newArray[i].price}</p>
                        <button type="button" class="btn-sm btn-success">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
        `
        }
    }else {
        newOrder.innerHTML = `
        <h3>"No se puede ordernar, no elegiste un criterio válido"</h3>`
    }
}
)



const calculate = () => {
    let valueDolar = document.getElementById("valueDolar").value;
    let total = document.getElementById("total");

    let valuePeso = 42;
    let iva = +valueDolar * (24 / 100);
    let impPeso = +valueDolar * (5 / 100);

    valueDolar = valuePeso * +valueDolar + iva + impPeso

    total.innerHTML = `
        <h3>Tienes que pagar UY$${valueDolar} pesos Uruguayos</h3>
        `
}