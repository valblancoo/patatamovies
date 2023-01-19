$(document).ready(function(){
$("#menu").on("click", function(){
   $("#menu").css("opacity", "0");
    $("#lgMenu").addClass("enter");
});
    $("#exit").on("click", function(){
       $("#lgMenu").removeClass("enter");
        $("#menu").css("opacity", "1");
    });
});

var contador = 0;

//function () {
//    "use strict";
//    if (contador <= 100) {
//        document.getElementById("porcentaje").innerHTML = contador + "%";
//        contador = contador + 1;
//        setTimeout(carga, 50);
//    } else {
//        document.getElementById("carga").style.top = "-100%";
//        document.getElementById("carga").style.opacity = "0";
//    }
//}
//
//window.onload = function () {
//    "use strict";
//    carga();
//}


$(document).ready(function() {
        
        var porcentaje = 0;
        var c = 0;
        var i = setInterval(function() {
          
          $("#carga #porcentaje h1").html(c);
          $("#carga").css("width", c + "%");
          
          porcentaje++;
          c++;
          if(porcentaje == 101) {
            clearInterval(i);
          }
        }, 20);
      });