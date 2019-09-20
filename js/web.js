console.log("test.js ACCESS!") //盡量不要使用alert指令，會阻礙頁面運行

$(document).ready(function(){
    //導覽列hover時的變化
    $("nav>div").hover(
         function() { 
            $(this).css({"background-color": "gold",
                        "box-shadow": "0px 10px 0px #eeb7b2",
                        "transition": "all 0.2s ease"});
            }
        ,function() {
            $(this).css("background-color","#eeb7b2");
            $(this).css("box-shadow","0 0 0");
    });

    //點選nav任一項時，移動至相對應div
    $("nav>div:nth-child(1)").click(
        function(){
            $("html,body").animate({"scrollTop":$("#TWO").offset().top-60});
    });
    $("nav>div:nth-child(2)").click(
        function(){
            $("html,body").animate({"scrollTop":$("#THREE").offset().top-60});
    });
    
    $("nav>div:nth-child(3)").click(
        function(){
            $("html,body").animate({"scrollTop":$("#FOUR").offset().top-60});
    });
    $("nav>div:nth-child(4)").click(
        function(){
            $("html,body").animate({"scrollTop":$("#FIVE").offset().top});
    });
    
    //回首頁
    $("#gotop").click(
        function(){
            $("html,body").animate({"scrollTop":"0"});
            n=1;
    });

    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide", 
            slideDirection: "vertical",  //String: Select the sliding direction, "horizontal" or "vertical"
            controlNav: false,      // Boolean: 是否建立控制點
            slideshowSpeed: 3000,   //time interval(ms)
            animationSpeed: 800,    //scroll time(ms)
            touch: true             //if支持觸屏滑動
        });
    });

    //內容方塊先消失
    $("#ONE,#TWO,#THREE,#FOUR,#FIVE").hide(0);
    $("#ONE,#TWO,#THREE,#FOUR,#FIVE").fadeIn(2000);

    //回首頁鈕先消失
    $("#gotop").fadeOut(0);
    $(window).scroll(
        function(){
            if($(window).scrollTop()>=$("article div").offset().top){
                $("#gotop").fadeIn(500);
            }else{
                $("#gotop").fadeOut(500);}
        });
});