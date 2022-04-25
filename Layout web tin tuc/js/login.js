$(document).ready(function(){
    $("#button-login").click(function()
    {
        $("#modal-login").modal();
    });
    
    /* check nhap thong tin */
    let us = $("#username").val(); 
    let pwd = $("#password").val(); 
    function checkUserName()
    {
        let cUN = /^[a-zA-Z0-9]$/i;
        if(us.trim()=="")
        {
            $("#errusername").html("Không để trống!!");
        }
        if(!us.test(cUN)){
            $("#errusername").html("Sai định dạng!!");
        }
        $("#errusername").html("(*)");
    }
    $("#username").keyup(checkUserName);
    function checkPassword()
    {
        let cPWD = /^[a-zA-Z0-9]$/i;
        if(pwd.trim()=="")
        {
            $("#errpassword").html("Không để trống!!");
        }
        if(!pwd.test(cPWD)){
            $("#errpassword").html("Sai định dạng!!");
        }
        $("#errpassword").html("(*)");
    }
    $("#password").keyup(checkPassword);



    /* xac thuc dang nhap */
    var account = {name:["admin"], password:["admin"]};
    
    function register()
    {
        usr = $("#username").val(); 
        pwr = $("#password]").val(); 
        account["name"].push(user);
        account["password"].push(pwr);
    }
    $("#register").click(register);
    function login ()
    {
        let usl = $("#username").val(); 
        let pwl = $("#password").val(); 

        if(usl == account["name"])
        {
            if(pwl == account["password"])
                {
                    
                    $("#modal-login").modal("hide");
                    $("#text-notification").html("Đăng nhập thành công!!");
                    $("#modal-notification").modal();

                }
            else
                {
                    
                    $("#text-notification").html("Sai mật khẩu!!");
                    $("#modal-notification").modal();
                }
        }
        else
        {
            
            $("#text-notification").html("Sai tài khoản!!");
            $("#modal-notification").modal();
        }
    }
    
    $("#login").click(login);
    $("#modal-login").modal('hide');  
    
});

    

