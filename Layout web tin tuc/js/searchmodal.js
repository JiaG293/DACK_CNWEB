$(document).ready(function(){
    $("#button-searchbox").mousedown(function()
    {
        $("#modal-searchbox").modal();
    });
    $.ajaxSetup({ cache: false });
    $("#input-searchbox").keyup(function(){
    $("#result-searchbox").html("");
    //$('#state-searchbox').val("");
    var searchField = $('#input-searchbox').val();
    var expr = new RegExp(searchField, "i");
    $.getJSON("../db/datasearchbox.json", function(data) {
        $.each(data, function(key, value){
        if (value.name.search(expr) != -1 || value.location.search(expr) != -1)
        {
            //$('#result').append('<li class="list-group-item link-class"><img src="'+value.image+'" height="40" width="40" class="img-thumbnail" /> '+value.name+' | <span class="text-muted">'+value.category+'</span><a target="_blank" href="'+value.link + '"><img class"navbar-link" src="../data/chevron-right-regular-24.png" alt="link"></a></li>');
            $("#result-searchbox").append('<li class="list-group-item link-class"> '+value.name+' | <span class="text-muted">'+value.category+'</span><a class="changeColor" target="_blank" href="'+value.link + '"><img src="../data/arrow-24.png" alt="link"></a></li>');
        }
        });   
     });
    });
    
    $("#result-searchbox").on("click", "li", function() {
     var click_text = $(this).text().split("|");
     $("#input-searchbox").val($.trim(click_text[0]));
     $("#result-searchbox").html("");
    });
    $("#button-searchbox").modal("hide");
});
