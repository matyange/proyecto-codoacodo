
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