$( document ).ready(function() {
    let i = 0;
    $("#bBinhLuan").on("click", function()
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
        let row = "<li class='table-bordered bg-info'><div class='lh'><strong class='text-info'>"+userbox+"</strong><sub><code>"+dateNow+"</code></sub></div><div class='text-success'>"+cmtbox+"</div></li>";
        $("#area-cmt").append(row);
        
    }); 
});
