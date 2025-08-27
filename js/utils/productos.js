let productos = [
    {
        nombre: "laptop",
        precio: 100,
        descripcion: "esto es un computador",
        imagen: "https://thumbs.dreamstime.com/z/l%C3%ADnea-de-productos-icono-compras-concepto-compra-firmar-sobre-huevos-botellas-supermercado-fondo-blanco-en-y-frutas-el-estilo-187972519.jpg?ct=jpeg"

    },

        {
        nombre: "audifonos",
        precio: 40,
        descripcion: "esto es un audifono",
        imagen: "https://thumbs.dreamstime.com/z/l%C3%ADnea-de-productos-icono-compras-concepto-compra-firmar-sobre-huevos-botellas-supermercado-fondo-blanco-en-y-frutas-el-estilo-187972519.jpg?ct=jpeg"
        
    }
]

let conproductos = document.getElementById("productos");
productos.forEach(prod => {
    conproductos.innerHTML += `
    <div class="col-md-4 mb-3">
        <div class="card h-100">
            <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
            <div class="card-body">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text">${prod.descripcion}</p>
                <p class="fw-bold">$${prod.precio}</p>
                <button class="btn btn-primary">Comprar</button>
            </div>
        </div>
    </div>
    `;
});
