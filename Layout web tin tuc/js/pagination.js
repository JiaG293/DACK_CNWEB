
$(document).click(function(){

    //let alt = $(".img-readmore").attr("alt");
    
    function loadingList(datapagination)
    {
        datapagination.forEach(lc =>{
            //let idcheck = lc.id;
            
            /* if(lc.tag == "thu thuat meo hay")
            { }*/
                let arr = "<article class='box-readmore'><img class='img-readmore img-rounded' src='"+lc.img+"'alt='kiem song'><a href='"+lc.link+"' target='_blank' class='link-readmore'><div class='tittle-readmore'>"+lc.tittle+"</div> <div class='content-readmore'>"+lc.content+"</div></a></article>";
                $("#readmore").append(arr); 
        });
    }
    $("#morenew").click(loadingList(datapagination));
});
