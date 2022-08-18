$(document).ready(function(){

    aberto = false;
	$("#possui").click(function(){
        if (!aberto) {
            $("#contas").append("<a class='text-light text-decoration-none' href='cadastro_cliente.html'>Criar conta cliente</a> <br>");
            $("#contas").append("<a class='text-light text-decoration-none' href='cadastro_empresa.html'>Criar conta empresa</a>");
            aberto = true;
        } else{
            $("#contas").empty();
            aberto = false;
        }
        
	});


});