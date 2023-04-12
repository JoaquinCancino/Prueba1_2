function Aviso() { 
    var v_nombre = document.getElementById('v_nombre');
    var v_apellido = document.getElementById('v_apellido');
    var v_numero = document.getElementById('v_numero');
    var v_correo = document.getElementById('v_correo');
    var v_mensaje = document.getElementById('v_mensaje');
    if(v_nombre.value ===''||v_apellido.value ===''||v_numero.value ===''||v_correo.value ===''||v_mensaje.value ===''){
        alert("falta rellenar bien el formulario");
    }else{
        alert("Se ha enviado el formulario");
    }
 }