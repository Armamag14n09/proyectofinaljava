const BBDD = [

    {
        "id":1,
        "nombre":"Equipo 01",
        "img":"./imagenes/gmaer1.jpg",
        "texto":"Equipo gama media RGB",
        "precio":2505,
        "cantidad":1
    },
    {
        "id":2,
        "nombre":"Equipo 02",
        "img":"./imagenes/gamer2.jpg",
        "texto":"Equipo semi profecional gamer",
        "precio":1509,
        "cantidad":1
    },
    {
        "id":3,
        "nombre":"Equipo 03",
        "img":"./imagenes/gamer3.jpg",
        "texto":"Combo de escritorio y silla gamer",
        "precio":3505,
        "cantidad":1
    },
    {
        "id":4,
        "nombre":"Equipo 04",
        "img":"./imagenes/gamer4.jpg",
        "texto":"Equipo para oficina",
        "precio":5009,
        "cantidad":1
    },
    {
        "id":5,
        "nombre":"Equipo 05",
        "img":"./imagenes/gamer5.jpg",
        "texto":"Todo para tu armar u optimizar tu equpo gamer u oficina",
        "precio":1107,
        "cantidad":1
    },
    {
        "id":6,
        "nombre":"Equipo 06",
        "img":"./imagenes/gamer6.jpg",
        "texto":"Consulta las ofertas del mes",
        "precio":2008,
        "cantidad":1
    },
    {
        "id":7,
        "nombre":"Equipo 07",
        "img":"./imagenes/gamer7.jpg",
        "texto":"Luces RGB",
        "precio":2753,
        "cantidad":1
    },

]
const carrito =[];
let total = 0;

function inicioProductos (){
    let tienda =document.getElementById('tienda');
    let filtro =document.getElementById('filtro');
        filtro.innerHTML = `
        <button class="btn btn-warning mb-5" onclick="filtroPrecio()">Filtrar Mayor $ 2000</button>
        `
    BBDD.forEach((e)=>{
        let productoHTML = `
        
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center ">
        <div class="card text-dark" style="width: 18rem;">
            <img class"card--img-top" src="${e.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>
                <p class="card-text">${e.texto}</p>
                <p>$ ${e.precio}</p>
                <button class="btn btn-primary" onClick="agregarProductoAlcarrito(${e.id})">Añadir al carrito</button>
            </div>
        </div>
        
        `
        tienda.innerHTML += productoHTML
    });

}

inicioProductos();

function agregarProductoAlcarrito(id){
    let producto = BBDD.find(producto => producto.id == id);
    let productoEncarrito = carrito.find(producto => producto.id ==id);
        if(productoEncarrito){
            productoEncarrito.cantidad++;
            
        }else{ 
            producto.cantidad = 1; 
            carrito.push(producto);
            inicioCarrito();
        }
        inicioCarrito();
}

function inicioCarrito(){
    let carritoHTML = document.getElementById('carrito');
    html = '';
    carrito.forEach((producto, id,)=>{
        html +=`
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
            <div class="card text-dark" style="width: 18rem;">
                <img class="card-img-top" src="${producto.img}" alt="Card image cap">
                 <div class="card-body">
                  <h5 class="card-title">${producto.nombre}</h5>
                  <p class="card-text">${producto.texto}</p>
                  <p>$ ${producto.precio}</p>
                  <p>Cantidad: ${producto.cantidad}</p>
                   <button class="btn btn-danger" onClick="eliminarProductoAlcarrito(${id})">Eliminar</button>
                 </div>
            </div>
        </div>
        `
    })
    carritoHTML.innerHTML = html;
 //  calcularTotal();
   renderCantidad();
   renderTotal();
}

/*function calcularTotal(){
    carrito.forEach((producto) => {
    var cant1=producto.precio
    var cant2=producto.cantidad
    
        total += (cant1) * (cant2);

    });
    console.log(total);
   

}*/
const eliminarProductoAlcarrito = (id)=> {
    carrito[id].cantidad--;
    if(carrito[id].cantidad == 0){
        carrito.splice(id,1);
    }
    inicioCarrito();
}

const contadorCarrito =document.querySelector('#contadorCarrito')
    const renderCantidad = ()=> {
         contadorCarrito.innerText =carrito.length
    }

    const precioTotal  = document.querySelector('#precioTotal')

const renderTotal =  () =>{
        let total = 0
        carrito.forEach((producto) =>{
            total += producto.precio
        })
    precioTotal.innerText =total
}


function filtroPrecio() { 
    let bd = BBDD.filter(producto => producto.precio > 2000);
    console.log(bd)
}

const textElement = document.getElementById("texto")
        console.log( textElement.innerText )
            const usuario = prompt('Ingresu su Nombre')
            textElement.innerText = "Bienvenido comprador "+usuario+" a Gamer =)"
localStorage.setItem("user", usuario)
