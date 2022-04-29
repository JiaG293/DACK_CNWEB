$(document).ready(function(){
    $("#button-login").click(function()
    {
        $("#modal-login").modal();
    });
    
    /* check nhap thong tin */
    
     
    
    function checkUserName()
    {
        let us = $("#username").val(); 
        let cUN = /^[a-zA-Z0-9]{6,45}$/;
        if(us.trim()=="")
        {
            $("#errusername").html("Không để trống!!");
            return false;
        }
        if(!cUN.test(us)){
            $("#errusername").html("Ít nhất 6 kí tự không chứa kí tự đặc biệt!!");
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
            $("#errpassword").html("Ít nhất 8 kí tự bất kì!!");
            return false;
        }
        $("#errpassword").html("(*)");
    }
    $("#password").keyup(checkPassword);



    /* xac thuc dang nhap */
    function register()
    {
        let usr = $("#username").val(); 
        let pwr = $("#password").val(); 
        anew.user = usr;
        anew.password = pwr;
        if(usr.trim()=="" || pwr.trim()=="")
        {
            $("#text-notification").html("Đăng kí thất bại!!(Chưa điền tài khoản mật khẩu)");
            $("#modal-notification").modal();
            return true;
        }
        if(usr.trim()=="" && pwr.trim()=="")
        {
            $("#text-notification").html("Đăng kí thất bại!!3");
            $("#modal-notification").modal();
            return true;
        }
        for(let i =0; i<account.length; i++)
        {
            if(usr == account[i].user)
            {
                $("#text-notification").html("Đăng kí thất bại!!(Tài khoản đã có người dùng)");
                $("#modal-notification").modal();
                return true;  
            }
        }
        $("#text-notification").html("Đăng kí thành công!!");
        $("#modal-notification").modal();
        var checkregis = account.push(anew);
        return true;  
    }
    $("#regis").click(register);

    /* dem nguoc thoi gian refresh trang */
    var cd = 12; //delay hieu ung modal 1.3s -2s tuy may 
    setInterval(function(){ 
        if (cd <= -1) {
            clearInterval(interval);
        }
        $("#countdown").html(cd);
        cd--;
     }, 1000);


    let i = 0
    function login()
    {
        let usl = $("#username").val(); 
        let pwl = $("#password").val(); 
        for(i = 0; i < account.length ; i++)
        {
            if(usl == account[i].user )
            {   
                
                if(pwl == account[i].password)
                {
                    $("#modal-login").modal("hide");
                    $("#text-notification").html("Đăng nhập thành công!!<br>(tự động refresh trang sau <span id='countdown'>9</span>)");
                    $("#modal-notification").modal();
                    $("#modal-notification").click(setTimeout(function()
                    {
                        window.location.reload();
                    }, 10000));
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

    

