$(document).ready(function(){
    $("#button-login").click(function()
    {
        $("#modal-login").modal();
    });
    
    /* check nhap thong tin */
    
     
    
    function checkUserName()
    {
        let us = $("#username").val(); 
        let cUN = /^[a-z0-9]{6,45}$/;
        if(us.trim()=="")
        {
            $("#errusername").html("Không để trống!!");
            return false;
        }
        if(!cUN.test(us)){
            $("#errusername").html("Sai định dạng!!");
            return false;
        }
        
        $("#errusername").html("(*)");
        return true
    }
    $("#username").keyup(checkUserName);
    
    function checkPassword()
    {
        let pwd = $("#password").val();
        let cPWD = /^[A-Za-z0-9(!#$%&'@*+-/=?^_`{|}~)]{8,100}$/;
        if(pwd.trim()=="")
        {
            $("#errpassword").html("Không để trống!!");
            return false;
        }
        if(!cPWD.test(pwd)){
            $("#errpassword").html("Sai định dạng!!");
            return false;
        }
        $("#errpassword").html("(*)");
    }
    $("#password").keyup(checkPassword);



    /* xac thuc dang nhap */
    function register()
    {
        var usr = $("#username").val(); 
        var pwr = $("#password]").val(); 
        a.user = usr;
        a.password = pwr;
        account.push(a);
        $("#modal-login").modal("hide");
        $("#text-notification").html("Đăng kí thành công!!");
        $("#modal-notification").modal();
    }
    $("#regis").click(register);
    let i = 0
    function login()
    {
        let usl = $("#username").val(); 
        let pwl = $("#password").val(); 
        for(i = 0; i < 7 ; i++)
        {
            if(usl == account[i].user )
            {   
                
                if(pwl == account[i].password)
                {
                    $("#modal-login").modal("hide");
                    $("#text-notification").html("Đăng nhập thành công!!");
                    $("#modal-notification").modal();
                    break;
                }
                else
                {
                    $("#text-notification").html("Sai mật khẩu!!");
                    $("#modal-notification").modal();
                    break;
                }
                
            }
            else
            {
                $("#text-notification").html("Sai tài khoản!!");
                $("#modal-notification").modal();
            }
        }
    }
    
    $("#login").click(login);
    $("#modal-login").modal('hide');  
});

    

