$(document).ready(function(){

    $("#login").click(function(){

        var uname = $('#username').val();  
        var password = $('#password').val();
        var obj=new Object();
        obj.uname = uname ;
        obj.password=password;
        alert(uname);
        $.ajax({
        type:"GET",
        dataType:"json",
        data: obj,
        url:"../db/datauser.json", 
        success: function(data) 
        {   
            $.each(data, function (key, value) {
                if (value.uname != '' && value.password!='')
                    {
                        if(value.uname!=uname && value.password!=password)
                        return false;
                    }
            });
        },
        error: function() 
        {

        }
        });
    });
});