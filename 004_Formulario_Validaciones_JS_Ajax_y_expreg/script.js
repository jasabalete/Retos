$(function () {
    //obtener la ccaa del json
    $.ajax({
        url: "api-rest/ccaa.json",
        method: "get",
        dataType: "json",
        success: function (data) {
            $.each(data, function(index, valor){
                $("select[name='ccaa'").append(new Option(valor.nombre, valor.codigo));
            });
        }
    });

    $("select[name='ccaa']").on("change", function(){
        const ccaa = $(this).val();
        $.ajax({
            url: "api-rest/prov/" + ccaa + ".json",
            method: "get",
            dataType: "json",
            success: function (data) {
                $("select[name='provincia'").empty();
                $.each(data, function(index, valor){
                    $("select[name='provincia'").append(new Option(valor.nombre, valor.codigo));
                });
            }
        });
    });

    $("#formulario_soporte").on("submit", function(){

        let hayError = false;

        // Validar el nombre completo que no sea "" y tenga > 10
        const nombre = $("input[name='nombre']").val().trim();

        if(nombre.length < 10) {
            hayError = true;
            $("input[name='nombre']").addClass("error");
        } else {
            $("input[name='nombre']").removeClass("error");
        }

        //Validar que el código sea 000-00-000X
        const codigo = $("input[name='codigo_producto']").val().trim();

        const isProductoValid = /^\d{3}[-]\d{2}[-]\d{3}[a-zA-Z]$/.test(codigo);
        
        if(!isProductoValid) {
            hayError = true;
            $("input[name='codigo_producto']").addClass("error");
        } else {
            $("input[name='codigo_producto']").removeClass("error");
        }

        if( $("select[name='ccaa'").val() === ""){
            $("select[name='ccaa'").addClass("error");
        } else {
            $("select[name='ccaa'").removeClass("error");
        }

        if( $("select[name='provincia'").val() === ""){
            $("select[name='provincia'").addClass("error");
        } else {
            $("select[name='provincia'").removeClass("error");
        }

        return ! hayError;
    });
});