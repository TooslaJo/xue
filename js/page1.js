console.log("test.js ACCESS!") //盡量不要使用alert指令，會阻礙頁面運行


$(document).ready(function(){
    //導覽列hover時的變化
    $("nav>a").hover(
         function() { 
            $(this).css({"background-color": "gold",
                        "box-shadow": "0px 10px 0px #eeb7b2",
                        "transition": "all 0.2s ease"});
            }
        ,function() {
            $(this).css("background-color","#eeb7b2");
            $(this).css("box-shadow","0 0 0");
    });
});

$(function(){
    $("div.img img").click(function(){
        $(this).toggleClass("imgSize");
        $(this).toggleClass("imgSizeMax");
    });
});

//輪播機制
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide", 
        slideDirection: "vertical",  //String: Select the sliding direction, "horizontal" or "vertical"
        slideshowSpeed: 3000,   //time interval(ms)
        animationSpeed: 800,    //scroll time(ms)
        touch: true             //if支持觸屏滑動
    });
});







