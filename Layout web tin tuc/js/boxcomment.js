$(document).ready(function() {
    let i = 0;
    function thembinhluan()
    {
        let cmtbox= $("#tfCMT").val();
        let userbox = $("#tfUSER").val();
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        let date = d.getDate();      
        let hour = d.getHours();
        let minutes = d.getMinutes();
        let dateNow = date +"/"+ month +"/"+ year +"  " + hour +":" + minutes;
        /* Form binh luan cu */
        //let row = "<li class='table-bordered bg-info'><div class='lh'><strong class='text-info'>"+userbox+"</strong><sub><code>"+dateNow+"</code></sub></div><div class='text-success'>"+cmtbox+"</div></li>";
        let row = "<li class='table-bordered bg-info'><div class='media'> <div class='media-left'> <img src='../data/user-64.png' class='media-object' style='width:60px'> </div> <div class='media-body'> <h4 class='media-heading text-info'><strong>"+userbox+"</strong><sub><code>"+dateNow+"</code></sub></h4><dd class='text-success' style='font-size: small;'>"+cmtbox+"</dd> </div> </div></li>" ;
        $("#area-cmt").append(row);
        
    }
    $("#bBinhLuan").click(thembinhluan);
});
