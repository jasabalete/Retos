window.onload = function () {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:8080/listar", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(xhttp.responseText);

            var placeholder = document.getElementById("mi-agenda");
            response.forEach(element => {
                //console.log(element.id + " - " + element.nombre + " - " + element.telefono);                
                var parrafo = document.createElement("p");
                parrafo.innerHTML = element.id + " - " + element.nombre + " - " + element.telefono;
                
                placeholder.appendChild(parrafo);
            });
        }
    }

    xhttp.send();
}