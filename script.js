document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    var nombre = document.getElementById('nombre').value;
    var nombreRegex = /^[A-Za-z\s]+$/;

    if (!nombreRegex.test(nombre)) {
        alert('El campo nombre no puede contener números.');
        return;
    }

    alert('Su consulta ha sido enviada. Nos pondremos en contacto con usted a la brevedad.');
    
    
    document.getElementById('consultaForm').reset();
});


document.getElementById('nombre').addEventListener('input', function(event) {
    this.value = this.value.replace(/[0-9]/g, '');
});

