$(function(){
    var count = 9;
    countdown = setInterval(function(){
        $("p.countdown").html(count + " seconds remaining!");
        if(count == 1){
            count = 10;
        }
        $("#count").val(count);
        count--;
    }, 1000);
});