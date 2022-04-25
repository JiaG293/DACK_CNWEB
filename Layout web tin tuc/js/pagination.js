let l1 = {id:"1", tag: "quocte", tittle:"Hoa hồng hồng lẫn hoa hồng trắng", img:"../data/antrom.jpg", link: "", content: "TP.HCM: Trở về sau cuộc nhậu, bị Tổ 363 xử phạt hơn 8 triệu đồng" };
let l2 = {id:"2", tag: "quocte", tittle:"Quảng Trị: Công trình trang trí cổng chào đèn led chưa được cấp phép vẫn thi công", img:"../data/congtrinh.jpg", link: "", content: "Kiếm sống 'vô hình': 'Ngưỡng sinh tồn' chạm đáy" };
let l3 = {id:"3", tag: "quocte", tittle:"TP.HCM: Trở về sau cuộc nhậu, bị Tổ 363 xử phạt hơn 8 triệu đồng", img:"../data/duoinuoc.png", link: "", content: "Kiếm sống 'vô hình': 'Ngưỡng sinh tồn' chạm đáy" };
let l4 = {id:"4", tag: "quocte", tittle:"Hoa cúc nhiều màu", img:"../data/doingoai.jpg", link: "", content: "Kiếm sống 'vô hình': 'Ngưỡng sinh tồn' chạm đáy" };
let l5 = {id:"5", tag: "quocte", tittle:"Hoa hồng phấn", img:"../data/khoito.jpg", link: "", content: "Kiếm sống 'vô hình': 'Ngưỡng sinh tồn' chạm đáy" };
//let l = {id: "", tag: "", tittle: "", img: "../data/", content: ""};
var datapagination = [l1, l2, l3, l4, l5];

$(document).click(function(){

    let mn = $("#morenew");
    let alt = $(".img-readmore").attr("alt");
    
    function loadingList(datapagination)
    {
        
        datapagination.forEach(lc =>{
            let idcheck = lc.id;
            if(lc.tag == "quocte" && idcheck !== alt)
            {
                let arr = "<article class='box-readmore'><img class='img-readmore img-rounded' src='"+lc.img+"'alt='kiem song'><a href='"+lc.link+"' target='_blank' class='link-readmore'><div class='tittle-readmore'>"+lc.tittle+"</div> <div class='content-readmore'>"+lc.content+"</div></a></article>";
                $("#readmore").append(arr);
            }   
        });
    }
    $(mn).click(loadingList(datapagination), listOld(datalistOld));
});
