document.addEventListener("DOMContentLoaded", function () {
    changeContentPriceMark();
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

