document.addEventListener("DOMContentLoaded", function () {
    changeContentPriceMark();

    let contador = 0;
    const price = 187;
    const elemento = document.getElementById('miContador');

    const intervalo = setInterval(() => {
        if (contador < price) {
            contador++;
            elemento.innerHTML = contador + ".00";
        } else {
            clearInterval(intervalo);
        }
    }, 10);

});

function changeContentPriceMark(numberContent) {
    if (numberContent != null) {
        componentpath = "components/" + numberContent + ".html"
    } else {
        componentpath = "components/price.html"

    }
    fetch(componentpath)
        .then(response => response.text())
        .then(data => {
            document.getElementById("containerPriceMark").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el HTML:", error));

}

