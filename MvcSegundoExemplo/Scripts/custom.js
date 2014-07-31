function exibirMensagem(titulo, mensagem) {
    $('body').append('<div id="dialogoMensagem" title="Mensagem", styles="front-size:75%;"></div>');
    $('#dialogoMensagem').append(mensagem);
    $('#dialogoMensagem').dialog({
        modal:true,
        title: titulo,
        width: 400,
        heigth: 300,
        buttons: {
            Ok: function() {
                $(this).dialog("clone");
                $(this).remove();
            }
        }             
    });
}