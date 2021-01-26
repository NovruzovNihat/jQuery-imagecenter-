$(function(){
 
    $("img").css({
        width : "300px" , 
        margin : "20px" ,
        "border-radius" : "25px"
    });
    $("img:even").css("float" ,"left");
    $("img:odd").css("float" ,"right");


    $("img").attr("alt","mese");
    $("img").attr("title","mese");

    $("#image").css({
        width : "100%" , 
        height : "100vh" , 
        "background-color" : "rgba(0,0,0,.7)",
        position : "fixed" , 
        "background-position" : "center" , 
        "background-repeat" : "no-repeat",
        top : 0,
        left: 0 ,
        display : "none",
        

    });

    $("img").click(function(){
        let url = `url('${$(this).attr("src")}')`;

        $("#image").css({
            display : "block",
            "background-image":url  
        })
    });

    $(".close").click(function(){
        $("#image").css({
            display : "none"
        })
    })

});