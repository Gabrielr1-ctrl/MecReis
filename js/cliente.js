/*=============================================
    CLIENTE - JAVASCRIPT
=============================================*/

const formulario = document.getElementById('cliente-form')

formulario.addEventListener('submit', async (event) =>{
    const cliente = {
        nome: document.getElementById('nome-dono').value,
        telefone: document.getElementById('telefone').value
    };

    console.log(cliente)
});

const resposta = await fetch("http://localhost:8080/BackEndMecReis/clientes", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(cliente)

});