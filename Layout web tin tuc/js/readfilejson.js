$(document).ready(function(){
    $.getJSON('../db/datanews.json', function(data) {
        $.each(data, function(key, value){
        if (value.name.search(expression) != -1 || value.location.search(expression) != -1)
        {
            $('#result').append('<li class="list-group-item link-class"> '+value.name+' | <span class="text-muted">'+value.category+'</span><a class="changeColor" target="_blank" href="'+value.link + '"><img src="../data/chevron-right-regular-24.png" alt="link"></a></li>');
        }
        });   
     });
    });
});

