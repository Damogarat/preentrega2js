const productos = [
  new Producto('Cerveza', 1200),
  new Producto('Gin', 17000),
  new Producto('Vino malbec', 11000),
  new Producto('Ron', 1500),
  new Producto('Whisky', 55000)
];

// 2
alert('Bienvenido a nuestra tienda');

// 3
function agregarAlCarrito(producto, cantidad) {
  producto.cantidad += cantidad;
}

// 4
function mostrarCarrito() {
  let total = 0;

  if (productos.every(producto => producto.cantidad === 0)) {
    alert('Por favor agregue productos');
    return;
  }

  let mensaje = 'Productos:\n';

  for (let producto of productos) {
    if (producto.cantidad > 0) {
      mensaje += `${producto.nombre} - Cantidad: ${producto.cantidad} - Subtotal: $${producto.precio * producto.cantidad}\n`;
      total += producto.precio * producto.cantidad;
    }
  }

  mensaje += `\nTotal: $${total}`;

  alert(mensaje);
}

// 5
let opciones = '';

for (let i in productos) {
  opciones += `${+(i) + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
}

while (true) {
  const eleccion = prompt(`Elige tu producto del 1 al ${productos.length} y se agregará a tu compra o elige 0 (cero) para terminar:\n${opciones}`);

  if (eleccion === '0') {
    break;
  }

  if (eleccion && eleccion >= 1 && eleccion <= productos.length) {
    const cantidad = +(prompt(`¿Qué cantidad de "${productos[eleccion - 1].nombre}" quieres comprar?`));

    if (!isNaN(cantidad) && cantidad >= 1) {
      agregarAlCarrito(productos[eleccion - 1], cantidad);
      alert(`Vas a comprar ${cantidad} unidades de "${productos[eleccion - 1].nombre}"`);
    } else {
      alert("Esta opción no está disponible");
    }
  } else {
    alert("Esta opción no está disponible");
  }
}

mostrarCarrito();
