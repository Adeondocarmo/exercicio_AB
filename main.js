const form = document.getElementById('form-deposito');

function validarCampo(campoA, campoB) {
    if (campoA < campoB) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e) {

    const campoA = +document.getElementById('campo-a').value;
    const campoB = +document.getElementById('campo-b').value;

    e.preventDefault();
    if (!validarCampo(campoA, campoB)) {
        alert('Error! Campo A é maior ou igual ao Campo B!');
    } else {
        alert('OK! Campo A é menor que Campo B.');
    }
})

console.log(form);