'use strict'

function enviarDatos() {

    var id = document.getElementById("valor1").value;
    var dpmt = document.getElementById("valor2").value;
    var name = document.getElementById("valor3").value;

    var params = {
        id:id,
        dpmt:dpmt,
        name:name
    }

    console.log(JSON.stringify(params));

    fetch('  https://ty7gud8myk.execute-api.us-east-2.amazonaws.com/dev/api', {
        method:'POST',
        body: JSON.stringify(params),
        headers: {'Content-Type':'application/json'},
        mode: "cors"
    })
        .then(data => {
            console.log(data);
        })
}

function traerDatos() {
    fetch('  https://ty7gud8myk.execute-api.us-east-2.amazonaws.com/dev/api')
        .then((res, err) => {
            if (res) {
              console.log(res.json());
            }  else {
                console.log(err);
            }
        });
}
