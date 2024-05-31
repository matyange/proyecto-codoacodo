var container = document.querySelector("#catalogo");
window.onload = getCatalog();
 function getCatalog() {
    fetch('https://api.sampleapis.com/wines/reds')
        .then(res => res.json())
        .then(res => {
            getAll = casteo(res);
            for (let i = 0; i < getAll.length; i++) {

                let agregar = document.createElement("div");
                agregar.innerHTML = `
                <div class=catalogo-info>
                <h3>
                ${getAll[i].nombre}
                </h3>
                <p>Cosecha: ${getAll[i].cosecha}</p>
                <img src="${getAll[i].image}" alt="">

                </div>
                `
                container.appendChild(agregar);
            }
            console.log(getAll);
        })
}

/* ingreso el json recibido y lo casteo con la clase winnery atravez de un IF donde pregunto si 
// dentro del atributo location contiene la palabra argentina, 
// si contiene la palabra me devolvera el numero de la posicion en
  donde empieza sino devolvera -1 */
function casteo(item) {
    const obj = [];
    const ver = item;
    for (let i = 0; i < ver.length; i++) {

        if (ver[i].location.indexOf("Argentina") != -1) {
            let valor = new winnery(ver[i].id, ver[i].winery, ver[i].wine, ver[i].image, ver[i].location);
            obj.push(valor)
        }
    }
    return obj;

}


class winnery {
    constructor(Id, nomb, cosec, imag, loca) {
        this.id = Id;
        this.nombre = nomb;
        this.cosecha = cosec;
        this.image = imag;
        this.location = loca;
    }
}




// validacion del contacto

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario por su ID
    var form = document.getElementById('contactForm');

    // Verificar si el formulario existe antes de añadir el event listener
    if (form) {
        form.addEventListener('submit', function(event) {
            // Prevenir el envío del formulario por defecto
            event.preventDefault();

            // Obtener valores de los campos del formulario
            var nombre = document.getElementById('Nombre').value.trim();
            var apellido = document.getElementById('Apellido').value.trim();
            var empresa = document.getElementById('empresa').value.trim();
            var dni = document.getElementById('DNI').value.trim();
            var telefono = document.getElementById('telefono').value.trim();
            var email = document.getElementById('email').value.trim();
            var condiciones = document.getElementById('condiciones').checked;

            // Validaciones de ejemplo
            if (nombre === "" || apellido === "" || empresa === "" || dni === "" || telefono === "" || email === "" || !condiciones) {
                alert('Por favor, complete todos los campos obligatorios.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Por favor, ingrese un email válido.');
                return;
            }

            // Si todas las validaciones pasan, puedes proceder con el envío del formulario
            alert('Formulario enviado correctamente');
            // form.submit(); // Descomenta esta línea si quieres permitir el envío del formulario después de la validación
        });
    } else {
        console.error('El formulario con el ID "contactForm" no se encontró.');
    }
});

// Función de validación de email
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}