
$(document).ready(function({
    let arrow = $("#next-page, #prev-page").not("li a")

    $("#bnext").click(function () {
        let MaTour = $("#tfMaTour").val();
        let HanhTrinh = $("#tfHanhTrinh").val();
        let NgayKhoiHanh = $("#tfNgayKhoiHanh").val();
        let ThoiGian = $("#tfThoiGian").val();
        let GiaTour = $("#tfGiaTour").val();
        let AnhDaiDien = $("#tfAnhDaiDien").val();
        if (!checkMaTour()||!checkNgayKhoiHanh||!checkGiaTour()||!checkHanhTrinh()) 
        {
            alert("Mời bạn nhập đúng và đầy đủ thông tin");
            //$("#errLuu").html("Mời bạn nhập đúng và đầy đủ thông tin");
            return false;
        }
        let row = "<tr><td>"+(++i)+"</td><td>"+MaTour+"</td><td>"+HanhTrinh+"</td><td>"+NgayKhoiHanh+"</td><td>"+ThoiGian+"</td><td>"+GiaTour+"</td><td>"+AnhDaiDien+"</td></tr>"
        $("#tbm").append(row);
        $("#openModal").modal("hide");
        return true;
  });
 
});
