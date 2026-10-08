// Selecciona todos los productos
const productos = document.querySelectorAll('.producto');

// Efecto al pasar el mouse sobre cada producto
productos.forEach(function(producto) {

    producto.addEventListener('mouseover', function() {
        producto.style.transform = 'scale(1.05)';
    });

    producto.addEventListener('mouseout', function() {
        producto.style.transform = 'scale(1)';
    });

});

// Muestra los detalles del producto
function mostrarDetalle(nombre, descripcion) {

    alert(nombre + "\n\n" + descripcion);

}

// Validación del formulario de contacto
const formulario = document.getElementById('formularioContacto');

if (formulario) {

    formulario.addEventListener('submit', function(event) {

        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        const mensajeFormulario =
            document.getElementById('mensajeFormulario');

        if (nombre === '' || email === '' || mensaje === '') {

            mensajeFormulario.textContent =
                'Por favor, completa todos los campos.';

            mensajeFormulario.style.color = 'red';

        } else {

            mensajeFormulario.textContent =
                'Mensaje enviado correctamente.';

            mensajeFormulario.style.color = 'green';

        }

    });

}