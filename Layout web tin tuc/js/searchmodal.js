$(document).ready(function(){
    $("#button-searchbox").click(function()
    {
        $("#modal-searchbox").modal();
    });
    $("#input-searchbox").keyup(function(){
        $("#result-searchbox").html("");
        var searchField = $('#input-searchbox').val();
        var expr = new RegExp(searchField, "i"); // dung regex search i khong phan biet chu cai
        $.getJSON("../db/datasearchbox.json", function(datasearchbox){
            $.each(datasearchbox, function(index, value){
                if (value.name.search(expr) != -1 || value.location.search(expr) != -1)
                {
                    //$('#result-searchbox').append('<li class="list-group-item link-class"><img src="'+val.image+'" height="40" width="40" class="img-thumbnail" /> '+value.name+' | <span class="text-muted">'+val.category+'</span><a target="_blank" href="'+val.link + '"><img class"navbar-link" src="../data/chevron-right-regular-24.png" alt="link"></a></li>');
                    $("#result-searchbox").append('<li class="list-group-item link-class"> '+index+" | "+value.name+' | <span class="text-muted">'+value.category+'</span><a class="changeColor" target="_blank" href="'+value.link + '"><img src="../data/arrow-24.png" alt="link"></a></li>');
                }
            });   
        });
    });
    $("#button-searchbox").modal("hide");
});
