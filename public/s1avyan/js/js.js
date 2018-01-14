$(document).ready(function(){

        $("#id_").click(function(){
            alert($(this).attr('id'));
        });

    var typea = 0;
   /* $(".T1Btn button").click(function(){
        typea = $(this).data('typea');
        var point = $('#a1').text();
        $('.grafik .T1View').text(typea + ' ' + point);
        $('.grafik .T1View').addClass('pipka');
        $('.grafik .T1View').removeClass('T1View');
        $('.grafik .T2View').removeClass('T2View');
        $('.grafik').append('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');      
        
        //alert(typea);
    });*/
  /*  $(".T2Btn button").click(function(){
        typea = $(this).data('typea');
        var point = $('#a2').text();
        $('.grafik .T2View').text(typea + ' ' + point);
        $('.grafik .T1View').removeClass('T1View');
        $('.grafik .T2View').adCldass('pipka');
        $('.grafik .T2View').removeClass('T2View');
        $('.grafik').append('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');      
        
        //alert(typea);
    });*/

//  function stata(){
 //           $('.wrap').prepend('<div class="remove"><button data-typea="Ошибка">Ошибка</button><button data-typea="Эйс">Эйс</button><button data-typea="Атака">Атака</button><button data-typea="Скидка">Скидка</button><button data-typea="Блок">Блок</button></div>');
 //           };
//
 //           $(".T2Btn button").click(function(){
 //           typea = $(this).data('typea');
 //           var point = $(asds).text();
 //           $('.grafik .T1View').text(typea + ' ' + point);
  //          $('.grafik .T2View').removeClass('T2View');
 //           $('.grafik .T1View').addClass('pipka');
 //           $('.grafik .T1View').removeClass('T1View');
 //           $('.remove').remove();
 //           $('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');
 //       }); 
        //Сумма очков в партии по нажатию
        function Summ(){
            var sumPointT1 = parseInt($('#a1').text())+parseInt($('#b1').text())+parseInt($('#c1').text())+parseInt($('#d1').text())+parseInt($('#e1').text());
            var sumPointT2 = parseInt($('#a2').text())+parseInt($('#b2').text())+parseInt($('#c2').text())+parseInt($('#d2').text())+parseInt($('#e2').text());
            $("#f1").text(sumPointT1);
            $("#f2").text(sumPointT2);
            $('.team1PointsAll').text($('#f1').text());
            $('.team2PointsAll').text($('#f2').text());
        };
        $('.col1').click(function(){
            var colortest = $(this).data("col");
            $("#team1color").css({'background':'#'+colortest});
            $("#team1colorCustom").val(colortest);
        });
        $('.col2').click(function(){
            var colortest = $(this).data("col");
            $("#team2color").css({'background':'#'+colortest});
            $("#team2colorCustom").val(colortest);
        });
        $('.team1colorCustom').change(function(){
            var colortest = $('.team1colorCustom').val();
            $("#team1color").css({'background':'#'+colortest});
        });
        $('.team2colorCustom').change(function(){
            var colortest = $('.team2colorCustom').val();
            $("#team2color").css({'background':'#'+colortest});
        });
        //Выбор команды  1 для добавления в табло
        $('.pick1').click(function(){
            var team1Pick = $(this).data("pick");
            $("#team1").text(team1Pick);
            $(".team1name").text(team1Pick);
            var team1color = $(this).data("color");
            $("#team1color").css({'background':'#'+team1color});
            $("#team1colorCustom").val(team1color);
        });
        //Выбор команды  2 для добавления в табло
        $('.pick2').click(function(){
            var team2Pick = $(this).data("pick");
            $("#team2").text(team2Pick);
            $(".team2name").text(team2Pick);
            var team2color = $(this).data("color");
            $("#team2color").css({'background':'#'+team2color});
            $("#team2colorCustom").val(team2color);
        });
        addEventListener("keydown", function(event) {
          if (event.keyCode == 81)
            morePointForTeam1();
            Summ();
        });
          addEventListener("keydown", function(event) {
            if (event.keyCode == 65)
                morePointForTeam2();
                Summ();
          });
          addEventListener("keydown", function(event) {
            if (event.keyCode == 87)
                lessPointForTeam1();
                Summ();
          });
          addEventListener("keydown", function(event) {
            if (event.keyCode == 83)
              lessPointForTeam2();
                Summ();
          });
          addEventListener("keydown", function(event) {
            if (event.keyCode == 69)
              radio1();
          });
          addEventListener("keydown", function(event) {
            if (event.keyCode == 68)
              radio2();
          });
          $("#refresh").click(function(){
            $('.list').toggleClass('hideblock');
          });
            addEventListener("keydown", function(event) {
            if (event.keyCode == 49)
              $('.button1').click()
          });
            addEventListener("keydown", function(event) {
            if (event.keyCode == 50)
              $('.button2').click()
          });
            addEventListener("keydown", function(event) {
            if (event.keyCode == 51)
              $('.button3').click()
          });
            addEventListener("keydown", function(event) {
            if (event.keyCode == 52)
              $('.button4').click()
          });
            addEventListener("keydown", function(event) {
            if (event.keyCode == 53)
              $('.button5').click()
          });
});
            

function moreparty(){
		x = document.getElementById("GSCORE1").value;
        x++;
        document.getElementById("point1").innerHTML = x;
        document.getElementById("GSCORE1").value = x;
      }
function lessparty1(){
    	x = document.getElementById("GSCORE1").value;
        x--;
        document.getElementById("point1").innerHTML = x;
        document.getElementById("GSCORE1").value = x;}
function moreparty2(){
		x = document.getElementById("GSCORE2").value;
        x++;
        document.getElementById("point2").innerHTML = x;
        document.getElementById("GSCORE2").value = x;}
function lessparty2(){
		x = document.getElementById("GSCORE2").value;
        x--;
        document.getElementById("point2").innerHTML = x;
        document.getElementById("GSCORE2").value = x;}

function refresh(){
    var list = ["SCORE1", "SCORE2", "GSCORE1", "GSCORE2"]
        for ( i = 0 ; i < list.length ; i++ ){
        document.getElementById(list[i]).value = 0;
        }
    var list = ["a1", "b1", "c1", "d1","e1", "a2", "b2", "c2","d2", "e2","point1","point2"];
        for ( i = 0 ; i < list.length ; i++ ){
        document.getElementById(list[i]).innerHTML = 0;
        }
    var list = ["svet1", "svet2", "svet3", "svet4", "svet5"];
        for( i = 0 ; i < list.length ; i++ ){
        document.getElementById(list[i]).style.backgroundColor = "";
        document.getElementById(list[i]).style.border = "0px solid gray";
    }
    var list = ["team1name", "team2name"]
        for ( i = 0 ; i < list.length ; i++ ){
        document.getElementById(list[i]).value = "";
        }
 document.getElementById("team1").innerHTML = "DreamTeam 1"
 document.getElementById("team2").innerHTML = "DreamTeam 2"
 document.getElementById("tablo").style.width = "225px";
 document.getElementById("b1").style.opacity = 0;
 document.getElementById("c1").style.opacity = 0;
 document.getElementById("d1").style.opacity = 0;
 document.getElementById("e1").style.opacity = 0;
 document.getElementById("b2").style.opacity = 0;
 document.getElementById("c2").style.opacity = 0;
 document.getElementById("d2").style.opacity = 0;
 document.getElementById("e2").style.opacity = 0;

}
var естьЛиКнопки = 0;
function morePointForTeam1(){

        function stata(){
            $('.wrap').prepend('<div class="remove"><button class="button1" data-typea="Ошибка">Ошибка <br>(1)</button><button class="button2" data-typea="Эйс">Эйс <br>(2)</button><button class="button3" data-typea="Атака">Атака <br>(3)</button><button class="button4" data-typea="Скидка">Скидка <br>(4)</button><button class="button5" data-typea="Блок">Блок <br>(5)</button></div>');
            };   
function removing(){
            $('.remove').remove();
            естьЛиКнопки = 0;
}

   // setTimeout(removing, 500);
     //       removing();
if (естьЛиКнопки === 0) {
    естьЛиКнопки++;
    stata();
} 
           

           
    var a = document.getElementById("SCORE1").value;
    var b = document.getElementById("SCORE2").value;
        var z = document.getElementsByClassName("p1");
        for (i = 0; i < z.length; i++) {
        z[i].style.opacity = 1;
    document.getElementById("podacha1").style.transform = "rotate(720deg)";}
        var z = document.getElementsByClassName("p2");
        for (i = 0; i < z.length; i++) { 
        z[i].style.opacity = 0;
    document.getElementById("podacha2").style.transform = "rotate(0deg)";
}
    var GSCORE1 = (document.getElementById("GSCORE1").value - 0)
    var GSCORE2 = (document.getElementById("GSCORE2").value - 0)
      var psy = GSCORE1 + GSCORE2;
    var x = document.getElementById("SCORE1").value;
        x++;
        var zz = 24;
        var abs = ["#a1","#b1","#c1","#d1","#e1"];
var Команда1_Ошибка_СтатистикаПоВстрече = 0;
var Команда1_Эйс_СтатистикаПоВстрече = 0;
var Команда1_Атака_СтатистикаПоВстрече = 0;
var Команда1_Скидка_СтатистикаПоВстрече = 0;
var Команда1_Блок_СтатистикаПоВстрече = 0;

var Команда1_Ошибка_Партия1 = 0;
var Команда1_Эйс_Партия1 = 0;
var Команда1_Атака_Партия1 = 0;
var Команда1_Скидка_Партия1 = 0;
var Команда1_Блок_Партия1 = 0;

var Команда1_Ошибка_Партия2 = 0;
var Команда1_Эйс_Партия2 = 0;
var Команда1_Атака_Партия2 = 0;
var Команда1_Скидка_Партия2 = 0;
var Команда1_Блок_Партия2 = 0;

var Команда1_Ошибка_Партия3 = 0;
var Команда1_Эйс_Партия3 = 0;
var Команда1_Атака_Партия3 = 0;
var Команда1_Скидка_Партия3 = 0;
var Команда1_Блок_Партия3 = 0;

var Команда1_Ошибка_Партия4 = 0;
var Команда1_Эйс_Партия4 = 0;
var Команда1_Атака_Партия4 = 0;
var Команда1_Скидка_Партия4 = 0;
var Команда1_Блок_Партия4 = 0;

var Команда1_Ошибка_Партия5 = 0;
var Команда1_Эйс_Партия5 = 0;
var Команда1_Атака_Партия5 = 0;
var Команда1_Скидка_Партия5 = 0;
var Команда1_Блок_Партия5 = 0;

    if (psy == 0) {
        document.getElementById("SCORE1").value = x;
        $('#a1').text(x);
         $('.team1Points1').text($('#a1').text());
         $(".remove button").click(function(){
            typear = $(this).data('typea');
            var point = $(abs[psy]).text();
            естьЛиКнопки = 0;
           
            
             if (typear == 'Ошибка') {
                Команда1_Ошибка_СтатистикаПоВстрече = parseInt($('.команда1_Ошибка').text()) + 1;
                $('.команда1_Ошибка').text(Команда1_Ошибка_СтатистикаПоВстрече);
                Команда1_Ошибка_Партия1 = parseInt($('.команда1_партия1_Ошибка').text()) + 1;
                $('.команда1_партия1_Ошибка').text(Команда1_Ошибка_Партия1);
            }   
            if (typear == 'Эйс') {
                Команда1_Эйс_СтатистикаПоВстрече = parseInt($('.команда1_Эйс').text()) + 1;
                $('.команда1_Эйс').text(Команда1_Эйс_СтатистикаПоВстрече);
                Команда1_Эйс_Партия1 = parseInt($('.команда1_партия1_Эйс').text()) + 1;
                $('.команда1_партия1_Эйс').text(Команда1_Эйс_Партия1);
            }   
            if (typear == 'Атака') {
                Команда1_Атака_СтатистикаПоВстрече = parseInt($('.команда1_Атака').text()) + 1;
                $('.команда1_Атака').text(Команда1_Атака_СтатистикаПоВстрече);
                Команда1_Атака_Партия1 = parseInt($('.команда1_партия1_Атака').text()) + 1;
                $('.команда1_партия1_Атака').text(Команда1_Атака_Партия1);
            }   
            if (typear == 'Скидка') {
                Команда1_Скидка_СтатистикаПоВстрече = parseInt($('.команда1_Скидка').text()) + 1;
                $('.команда1_Скидка').text(Команда1_Скидка_СтатистикаПоВстрече);
                Команда1_Скидка_Партия1 = parseInt($('.команда1_партия1_Скидка').text()) + 1;
                $('.команда1_партия1_Скидка').text(Команда1_Скидка_Партия1);
            }   
            if (typear == 'Блок') {
                Команда1_Блок_СтатистикаПоВстрече = parseInt($('.команда1_Блок').text()) + 1;
                $('.команда1_Блок').text(Команда1_Блок_СтатистикаПоВстрече);
                Команда1_Блок_Партия1 = parseInt($('.команда1_партия1_Блок').text()) + 1;
                $('.команда1_партия1_Блок').text(Команда1_Блок_Партия1);
            }
            $('.grafik .T1View').text(typear + ' ' + point);
            $('.grafik .T2View').removeClass('T2View');
            $('.grafik .T1View').addClass('pipka');
            $('.grafik .T1View').removeClass('T1View');
            $('.remove').remove();
            $('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');
        }); 


} else if (psy == 1){ 
        document.getElementById("b1").innerHTML = x;
        document.getElementById("SCORE1").value = x;
        document.getElementById("tablo").style.width = "250px";
        document.getElementById("b1").style.opacity = 1;
        document.getElementById("b2").style.opacity = 1;
            $('.team1Points2').text($('#b1').text());
         $(".remove button").click(function(){
            typear = $(this).data('typea');
            var point = $(abs[psy]).text();
            естьЛиКнопки = 0;
             if (typear == 'Ошибка') {
                Команда1_Ошибка_СтатистикаПоВстрече = parseInt($('.команда1_Ошибка').text()) + 1;
                $('.команда1_Ошибка').text(Команда1_Ошибка_СтатистикаПоВстрече);
                Команда1_Ошибка_Партия2 = parseInt($('.команда1_партия2_Ошибка').text()) + 1;
                $('.команда1_партия2_Ошибка').text(Команда1_Ошибка_Партия2);
            }   
            if (typear == 'Эйс') {
                Команда1_Эйс_СтатистикаПоВстрече = parseInt($('.команда1_Эйс').text()) + 1;
                $('.команда1_Эйс').text(Команда1_Эйс_СтатистикаПоВстрече);
                Команда1_Эйс_Партия2 = parseInt($('.команда1_партия2_Эйс').text()) + 1;
                $('.команда1_партия2_Эйс').text(Команда1_Эйс_Партия2);
            }   
            if (typear == 'Атака') {
                Команда1_Атака_СтатистикаПоВстрече = parseInt($('.команда1_Атака').text()) + 1;
                $('.команда1_Атака').text(Команда1_Атака_СтатистикаПоВстрече);
                Команда1_Атака_Партия2 = parseInt($('.команда1_партия2_Атака').text()) + 1;
                $('.команда1_партия2_Атака').text(Команда1_Атака_Партия2);
            }   
            if (typear == 'Скидка') {
                Команда1_Скидка_СтатистикаПоВстрече = parseInt($('.команда1_Скидка').text()) + 1;
                $('.команда1_Скидка').text(Команда1_Скидка_СтатистикаПоВстрече);
                Команда1_Скидка_Партия2 = parseInt($('.команда1_партия2_Скидка').text()) + 1;
                $('.команда1_партия2_Скидка').text(Команда1_Скидка_Партия2);
            }   
            if (typear == 'Блок') {
                Команда1_Блок_СтатистикаПоВстрече = parseInt($('.команда1_Блок').text()) + 1;
                $('.команда1_Блок').text(Команда1_Блок_СтатистикаПоВстрече);
                Команда1_Блок_Партия2 = parseInt($('.команда1_партия2_Блок').text()) + 1;
                $('.команда1_партия2_Блок').text(Команда1_Блок_Партия2);
            }
            $('.grafik .T1View').text(typear + ' ' + point);
            $('.grafik .T2View').removeClass('T2View');
            $('.grafik .T1View').addClass('pipka');
            $('.grafik .T1View').removeClass('T1View');
            $('.remove').remove();
            $('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');
        }); 
} else if (psy == 2){
        document.getElementById("c1").innerHTML = x;
        document.getElementById("SCORE1").value = x;
        document.getElementById("tablo").style.width = "275px";
        document.getElementById("c1").style.opacity = 1;
        document.getElementById("c2").style.opacity = 1;
            $('.team1Points3').text($('#c1').text());
         $(".remove button").click(function(){
            typear = $(this).data('typea');
            var point = $(abs[psy]).text();
            естьЛиКнопки = 0;
             if (typear == 'Ошибка') {
                Команда1_Ошибка_СтатистикаПоВстрече = parseInt($('.команда1_Ошибка').text()) + 1;
                $('.команда1_Ошибка').text(Команда1_Ошибка_СтатистикаПоВстрече);
                Команда1_Ошибка_Партия3 = parseInt($('.команда1_партия3_Ошибка').text()) + 1;
                $('.команда1_партия3_Ошибка').text(Команда1_Ошибка_Партия3);
            }   
            if (typear == 'Эйс') {
                Команда1_Эйс_СтатистикаПоВстрече = parseInt($('.команда1_Эйс').text()) + 1;
                $('.команда1_Эйс').text(Команда1_Эйс_СтатистикаПоВстрече);
                Команда1_Эйс_Партия3 = parseInt($('.команда1_партия3_Эйс').text()) + 1;
                $('.команда1_партия3_Эйс').text(Команда1_Эйс_Партия3);
            }   
            if (typear == 'Атака') {
                Команда1_Атака_СтатистикаПоВстрече = parseInt($('.команда1_Атака').text()) + 1;
                $('.команда1_Атака').text(Команда1_Атака_СтатистикаПоВстрече);
                Команда1_Атака_Партия3 = parseInt($('.команда1_партия3_Атака').text()) + 1;
                $('.команда1_партия3_Атака').text(Команда1_Атака_Партия3);
            }   
            if (typear == 'Скидка') {
                Команда1_Скидка_СтатистикаПоВстрече = parseInt($('.команда1_Скидка').text()) + 1;
                $('.команда1_Скидка').text(Команда1_Скидка_СтатистикаПоВстрече);
                Команда1_Скидка_Партия3 = parseInt($('.команда1_партия3_Скидка').text()) + 1;
                $('.команда1_партия3_Скидка').text(Команда1_Скидка_Партия3);
            }   
            if (typear == 'Блок') {
                Команда1_Блок_СтатистикаПоВстрече = parseInt($('.команда1_Блок').text()) + 1;
                $('.команда1_Блок').text(Команда1_Блок_СтатистикаПоВстрече);
                Команда1_Блок_Партия3 = parseInt($('.команда1_партия3_Блок').text()) + 1;
                $('.команда1_партия3_Блок').text(Команда1_Блок_Партия3);
            }
            $('.grafik .T1View').text(typear + ' ' + point);
            $('.grafik .T2View').removeClass('T2View');
            $('.grafik .T1View').addClass('pipka');
            $('.grafik .T1View').removeClass('T1View');
            $('.remove').remove();
            $('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');
        }); 
} else if (psy == 3){
        document.getElementById("d1").innerHTML = x;
        document.getElementById("SCORE1").value = x;
        document.getElementById("tablo").style.width = "300px";
        document.getElementById("d1").style.opacity = 1;
        document.getElementById("d2").style.opacity = 1;
            $('.team1Points4').text($('#d1').text());
         $(".remove button").click(function(){
            typear = $(this).data('typea');
            var point = $(abs[psy]).text();
            естьЛиКнопки = 0;
             if (typear == 'Ошибка') {
                Команда1_Ошибка_СтатистикаПоВстрече = parseInt($('.команда1_Ошибка').text()) + 1;
                $('.команда1_Ошибка').text(Команда1_Ошибка_СтатистикаПоВстрече);
                Команда1_Ошибка_Партия4 = parseInt($('.команда1_партия4_Ошибка').text()) + 1;
                $('.команда1_партия4_Ошибка').text(Команда1_Ошибка_Партия4);
            }   
            if (typear == 'Эйс') {
                Команда1_Эйс_СтатистикаПоВстрече = parseInt($('.команда1_Эйс').text()) + 1;
                $('.команда1_Эйс').text(Команда1_Эйс_СтатистикаПоВстрече);
                Команда1_Эйс_Партия4 = parseInt($('.команда1_партия4_Эйс').text()) + 1;
                $('.команда1_партия4_Эйс').text(Команда1_Эйс_Партия4);
            }   
            if (typear == 'Атака') {
                Команда1_Атака_СтатистикаПоВстрече = parseInt($('.команда1_Атака').text()) + 1;
                $('.команда1_Атака').text(Команда1_Атака_СтатистикаПоВстрече);
                Команда1_Атака_Партия4 = parseInt($('.команда1_партия4_Атака').text()) + 1;
                $('.команда1_партия4_Атака').text(Команда1_Атака_Партия4);
            }   
            if (typear == 'Скидка') {
                Команда1_Скидка_СтатистикаПоВстрече = parseInt($('.команда1_Скидка').text()) + 1;
                $('.команда1_Скидка').text(Команда1_Скидка_СтатистикаПоВстрече);
                Команда1_Скидка_Партия4 = parseInt($('.команда1_партия4_Скидка').text()) + 1;
                $('.команда1_партия4_Скидка').text(Команда1_Скидка_Партия4);
            }   
            if (typear == 'Блок') {
                Команда1_Блок_СтатистикаПоВстрече = parseInt($('.команда1_Блок').text()) + 1;
                $('.команда1_Блок').text(Команда1_Блок_СтатистикаПоВстрече);
                Команда1_Блок_Партия4 = parseInt($('.команда1_партия4_Блок').text()) + 1;
                $('.команда1_партия4_Блок').text(Команда1_Блок_Партия4);
            }
            $('.grafik .T1View').text(typear + ' ' + point);
            $('.grafik .T2View').removeClass('T2View');
            $('.grafik .T1View').addClass('pipka');
            $('.grafik .T1View').removeClass('T1View');
            $('.remove').remove();
            $('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');
        }); 
} else if (psy == 4){
        document.getElementById("e1").innerHTML = x;
        document.getElementById("SCORE1").value = x;
        document.getElementById("tablo").style.width = "325px";
        document.getElementById("e1").style.opacity = 1;
        document.getElementById("e2").style.opacity = 1;
            $('.team1Points5').text($('#e1').text());
         $(".remove button").click(function(){
            typear = $(this).data('typea');
            var point = $(abs[psy]).text();
            естьЛиКнопки = 0;
             if (typear == 'Ошибка') {
                Команда1_Ошибка_СтатистикаПоВстрече = parseInt($('.команда1_Ошибка').text()) + 1;
                $('.команда1_Ошибка').text(Команда1_Ошибка_СтатистикаПоВстрече);
                Команда1_Ошибка_Партия5 = parseInt($('.команда1_партия5_Ошибка').text()) + 1;
                $('.команда1_партия5_Ошибка').text(Команда1_Ошибка_Партия5);
            }   
            if (typear == 'Эйс') {
                Команда1_Эйс_СтатистикаПоВстрече = parseInt($('.команда1_Эйс').text()) + 1;
                $('.команда1_Эйс').text(Команда1_Эйс_СтатистикаПоВстрече);
                Команда1_Эйс_Партия5 = parseInt($('.команда1_партия5_Эйс').text()) + 1;
                $('.команда1_партия5_Эйс').text(Команда1_Эйс_Партия5);
            }   
            if (typear == 'Атака') {
                Команда1_Атака_СтатистикаПоВстрече = parseInt($('.команда1_Атака').text()) + 1;
                $('.команда1_Атака').text(Команда1_Атака_СтатистикаПоВстрече);
                Команда1_Атака_Партия5 = parseInt($('.команда1_партия5_Атака').text()) + 1;
                $('.команда1_партия5_Атака').text(Команда1_Атака_Партия5);
            }   
            if (typear == 'Скидка') {
                Команда1_Скидка_СтатистикаПоВстрече = parseInt($('.команда1_Скидка').text()) + 1;
                $('.команда1_Скидка').text(Команда1_Скидка_СтатистикаПоВстрече);
                Команда1_Скидка_Партия5 = parseInt($('.команда1_партия5_Скидка').text()) + 1;
                $('.команда1_партия5_Скидка').text(Команда1_Скидка_Партия5);
            }   
            if (typear == 'Блок') {
                Команда1_Блок_СтатистикаПоВстрече = parseInt($('.команда1_Блок').text()) + 1;
                $('.команда1_Блок').text(Команда1_Блок_СтатистикаПоВстрече);
                Команда1_Блок_Партия5 = parseInt($('.команда1_партия5_Блок').text()) + 1;
                $('.команда1_партия5_Блок').text(Команда1_Блок_Партия5);
            }
            $('.grafik .T1View').text(typear + ' ' + point);
            $('.grafik .T2View').removeClass('T2View');
            $('.grafik .T1View').addClass('pipka');
            $('.grafik .T1View').removeClass('T1View');
            $('.remove').remove();
            $('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');
        }); 
        zz = 14;
} 
    var list = ["party1win", "party2win", "party3win", "party4win", "party5win"];
        i = psy;
    var a = (document.getElementById("GSCORE1").value - 0);
    var b = (document.getElementById("GSCORE2").value - 0);
    var c = (document.getElementById("SCORE1").value - 0);
    var d = (document.getElementById("SCORE2").value - 0); 
    var e = c - d;
    //определение разницы в 2 очка 
    if (c > d) {
        if( e > 1){    
            if (c > zz){
                    var y = document.getElementsByClassName("partyscore1");
                    var w = document.getElementsByClassName("partyscore2");
                    var v = document.getElementById("GSCORE1").value;
                    var z = document.getElementsByClassName(list[i]);
                    for (i = 0; i < z.length; i++) {
                    z[i].style.backgroundColor = '#'+document.getElementById("team1colorCustom").value;
                    y[i].value = 0;w[i].value = 0;
                    document.getElementById("GSCORE1").value = (v-0)+1;
                    document.getElementById("point1").innerHTML = document.getElementById("GSCORE1").value;
                    z[i].style.border = "1px solid gray";

                    }  
            }
        }
    }
}
function lessPointForTeam1(){
    var psy = (document.getElementById("GSCORE1").value - 0) + (document.getElementById("GSCORE2").value - 0);
    var x = document.getElementById("SCORE1").value;
        x--;
        if (x > -1){
    if (psy == 0) {
        document.getElementById("a1").innerHTML = x;
        document.getElementById("SCORE1").value = x;
} else if (psy == 1){ 
        document.getElementById("b1").innerHTML = x;
        document.getElementById("SCORE1").value = x;
} else if (psy == 2){
        document.getElementById("c1").innerHTML = x;
        document.getElementById("SCORE1").value = x;
} else if (psy == 3){
        document.getElementById("d1").innerHTML = x;
        document.getElementById("SCORE1").value = x;
} else {
        document.getElementById("e1").innerHTML = x;
        document.getElementById("SCORE1").value = x;
}}}

var Команда2_Ошибка_СтатистикаПоВстрече = 0;
var Команда2_Эйс_СтатистикаПоВстрече = 0;
var Команда2_Атака_СтатистикаПоВстрече = 0;
var Команда2_Скидка_СтатистикаПоВстрече = 0;
var Команда2_Блок_СтатистикаПоВстрече = 0;

var Команда2_Ошибка_Партия1 = 0;
var Команда2_Эйс_Партия1 = 0;
var Команда2_Атака_Партия1 = 0;
var Команда2_Скидка_Партия1 = 0;
var Команда2_Блок_Партия1 = 0;

var Команда2_Ошибка_Партия2 = 0;
var Команда2_Эйс_Партия2 = 0;
var Команда2_Атака_Партия2 = 0;
var Команда2_Скидка_Партия2 = 0;
var Команда2_Блок_Партия2 = 0;

var Команда2_Ошибка_Партия3 = 0;
var Команда2_Эйс_Партия3 = 0;
var Команда2_Атака_Партия3 = 0;
var Команда2_Скидка_Партия3 = 0;
var Команда2_Блок_Партия3 = 0;

var Команда2_Ошибка_Партия4 = 0;
var Команда2_Эйс_Партия4 = 0;
var Команда2_Атака_Партия4 = 0;
var Команда2_Скидка_Партия4 = 0;
var Команда2_Блок_Партия4 = 0;

var Команда2_Ошибка_Партия5 = 0;
var Команда2_Эйс_Партия5 = 0;
var Команда2_Атака_Партия5 = 0;
var Команда2_Скидка_Партия5 = 0;
var Команда2_Блок_Партия5 = 0;

function morePointForTeam2(){
    function stata(){
            $('.wrap').prepend('<div class="remove"><button class="button1" data-typea="Ошибка">Ошибка <br>(1)</button><button class="button2" data-typea="Эйс">Эйс <br>(2)</button><button class="button3" data-typea="Атака">Атака <br>(3)</button><button class="button4" data-typea="Скидка">Скидка <br>(4)</button><button class="button5" data-typea="Блок">Блок <br>(5)</button></div>');
            };    
stata();
    var z = document.getElementsByClassName("p2");
    for (i = 0; i < z.length; i++) {
    z[i].style.opacity = 1;
    document.getElementById("podacha2").style.transform = "rotate(720deg)";}
    var z = document.getElementsByClassName("p1");
    for (i = 0; i < z.length; i++) {
    z[i].style.opacity = 0;
    document.getElementById("podacha1").style.transform = "rotate(0deg)";
    }
    var GSCORE1 = (document.getElementById("GSCORE1").value - 0)
    var GSCORE2 = (document.getElementById("GSCORE2").value - 0)
      var psy = GSCORE1 + GSCORE2;
    var x = document.getElementById("SCORE2").value;
        x++;
        var zz = 24;
        var abs = ["#a2","#b2","#c2","#d2","#e2"];
    if (psy == 0) {
        document.getElementById("a2").innerHTML = x;
        document.getElementById("SCORE2").value = x;
         $('.team2Points1').text($('#a2').text());
            $(".remove button").click(function(){
            typear = $(this).data('typea');
            var point = $(abs[psy]).text();
            естьЛиКнопки = 0;
             if (typear == 'Ошибка') {
                Команда2_Ошибка_СтатистикаПоВстрече = parseInt($('.команда2_Ошибка').text()) + 1;
                $('.команда2_Ошибка').text(Команда2_Ошибка_СтатистикаПоВстрече);
                Команда2_Ошибка_Партия1 = parseInt($('.команда2_партия1_Ошибка').text()) + 1;
                $('.команда2_партия1_Ошибка').text(Команда2_Ошибка_Партия1);
            }   
            if (typear == 'Эйс') {
                Команда2_Эйс_СтатистикаПоВстрече = parseInt($('.команда2_Эйс').text()) + 1;
                $('.команда2_Эйс').text(Команда2_Эйс_СтатистикаПоВстрече);
                Команда2_Эйс_Партия1 = parseInt($('.команда2_партия1_Эйс').text()) + 1;
                $('.команда2_партия1_Эйс').text(Команда2_Эйс_Партия1);
            }   
            if (typear == 'Атака') {
                Команда2_Атака_СтатистикаПоВстрече = parseInt($('.команда2_Атака').text()) + 1;
                $('.команда2_Атака').text(Команда2_Атака_СтатистикаПоВстрече);
                Команда2_Атака_Партия1 = parseInt($('.команда2_партия1_Атака').text()) + 1;
                $('.команда2_партия1_Атака').text(Команда2_Атака_Партия1);
            }   
            if (typear == 'Скидка') {
                Команда2_Скидка_СтатистикаПоВстрече = parseInt($('.команда2_Скидка').text()) + 1;
                $('.команда2_Скидка').text(Команда2_Скидка_СтатистикаПоВстрече);
                Команда2_Скидка_Партия1 = parseInt($('.команда2_партия1_Скидка').text()) + 1;
                $('.команда2_партия1_Скидка').text(Команда2_Скидка_Партия1);
            }   
            if (typear == 'Блок') {
                Команда2_Блок_СтатистикаПоВстрече = parseInt($('.команда2_Блок').text()) + 1;
                $('.команда2_Блок').text(Команда2_Блок_СтатистикаПоВстрече);
                Команда2_Блок_Партия1 = parseInt($('.команда2_партия1_Блок').text()) + 1;
                $('.команда2_партия1_Блок').text(Команда2_Блок_Партия1);
            }
            $('.grafik .T2View').text(point + ' ' + typear);
            $('.grafik .T1View').removeClass('T1View');
            $('.grafik .T2View').addClass('pipka');
            $('.grafik .T2View').removeClass('T2View');
            $('.remove').remove();
            $('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');
        }); 
} else if (psy == 1){ 
        document.getElementById("b2").innerHTML = x;
        document.getElementById("SCORE2").value = x;
        document.getElementById("tablo").style.width = "250px";
        document.getElementById("b1").style.opacity = 1;
        document.getElementById("b2").style.opacity = 1;
         $('.team2Points2').text($('#b2').text());
            $(".remove button").click(function(){
            typear = $(this).data('typea');
            var point = $(abs[psy]).text();
            естьЛиКнопки = 0;
             if (typear == 'Ошибка') {
                Команда2_Ошибка_СтатистикаПоВстрече = parseInt($('.команда2_Ошибка').text()) + 1;
                $('.команда2_Ошибка').text(Команда2_Ошибка_СтатистикаПоВстрече);
                Команда2_Ошибка_Партия2 = parseInt($('.команда2_партия2_Ошибка').text()) + 1;
                $('.команда2_партия2_Ошибка').text(Команда2_Ошибка_Партия2);
            }   
            if (typear == 'Эйс') {
                Команда2_Эйс_СтатистикаПоВстрече = parseInt($('.команда2_Эйс').text()) + 1;
                $('.команда2_Эйс').text(Команда2_Эйс_СтатистикаПоВстрече);
                Команда2_Эйс_Партия2 = parseInt($('.команда2_партия2_Эйс').text()) + 1;
                $('.команда2_партия2_Эйс').text(Команда2_Эйс_Партия2);
            }   
            if (typear == 'Атака') {
                Команда2_Атака_СтатистикаПоВстрече = parseInt($('.команда2_Атака').text()) + 1;
                $('.команда2_Атака').text(Команда2_Атака_СтатистикаПоВстрече);
                Команда2_Атака_Партия2 = parseInt($('.команда2_партия2_Атака').text()) + 1;
                $('.команда2_партия2_Атака').text(Команда2_Атака_Партия2);
            }   
            if (typear == 'Скидка') {
                Команда2_Скидка_СтатистикаПоВстрече = parseInt($('.команда2_Скидка').text()) + 1;
                $('.команда2_Скидка').text(Команда2_Скидка_СтатистикаПоВстрече);
                Команда2_Скидка_Партия2 = parseInt($('.команда2_партия2_Скидка').text()) + 1;
                $('.команда2_партия2_Скидка').text(Команда2_Скидка_Партия2);
            }   
            if (typear == 'Блок') {
                Команда2_Блок_СтатистикаПоВстрече = parseInt($('.команда2_Блок').text()) + 1;
                $('.команда2_Блок').text(Команда2_Блок_СтатистикаПоВстрече);
                Команда2_Блок_Партия2 = parseInt($('.команда2_партия2_Блок').text()) + 1;
                $('.команда2_партия2_Блок').text(Команда2_Блок_Партия2);
            }
            $('.grafik .T2View').text(point + ' ' + typear);
            $('.grafik .T1View').removeClass('T1View');
            $('.grafik .T2View').addClass('pipka');
            $('.grafik .T2View').removeClass('T2View');
            $('.remove').remove();
            $('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');
        }); 
} else if (psy == 2){
        document.getElementById("c2").innerHTML = x;
        document.getElementById("SCORE2").value = x;
        document.getElementById("tablo").style.width = "275px";
        document.getElementById("c1").style.opacity = 1;
        document.getElementById("c2").style.opacity = 1;
         $('.team2Points3').text($('#c2').text());
            $(".remove button").click(function(){
            typear = $(this).data('typea');
            var point = $(abs[psy]).text();
            естьЛиКнопки = 0;
             if (typear == 'Ошибка') {
                Команда2_Ошибка_СтатистикаПоВстрече = parseInt($('.команда2_Ошибка').text()) + 1;
                $('.команда2_Ошибка').text(Команда2_Ошибка_СтатистикаПоВстрече);
                Команда2_Ошибка_Партия3 = parseInt($('.команда2_партия3_Ошибка').text()) + 1;
                $('.команда2_партия3_Ошибка').text(Команда2_Ошибка_Партия3);
            }   
            if (typear == 'Эйс') {
                Команда2_Эйс_СтатистикаПоВстрече = parseInt($('.команда2_Эйс').text()) + 1;
                $('.команда2_Эйс').text(Команда2_Эйс_СтатистикаПоВстрече);
                Команда2_Эйс_Партия3 = parseInt($('.команда2_партия3_Эйс').text()) + 1;
                $('.команда2_партия3_Эйс').text(Команда2_Эйс_Партия3);
            }   
            if (typear == 'Атака') {
                Команда2_Атака_СтатистикаПоВстрече = parseInt($('.команда2_Атака').text()) + 1;
                $('.команда2_Атака').text(Команда2_Атака_СтатистикаПоВстрече);
                Команда2_Атака_Партия3 = parseInt($('.команда2_партия3_Атака').text()) + 1;
                $('.команда2_партия3_Атака').text(Команда2_Атака_Партия3);
            }   
            if (typear == 'Скидка') {
                Команда2_Скидка_СтатистикаПоВстрече = parseInt($('.команда2_Скидка').text()) + 1;
                $('.команда2_Скидка').text(Команда2_Скидка_СтатистикаПоВстрече);
                Команда2_Скидка_Партия3 = parseInt($('.команда2_партия3_Скидка').text()) + 1;
                $('.команда2_партия3_Скидка').text(Команда2_Скидка_Партия3);
            }   
            if (typear == 'Блок') {
                Команда2_Блок_СтатистикаПоВстрече = parseInt($('.команда2_Блок').text()) + 1;
                $('.команда2_Блок').text(Команда2_Блок_СтатистикаПоВстрече);
                Команда2_Блок_Партия3 = parseInt($('.команда2_партия3_Блок').text()) + 1;
                $('.команда2_партия3_Блок').text(Команда2_Блок_Партия3);
            }
            $('.grafik .T2View').text(point + ' ' + typear);
            $('.grafik .T1View').removeClass('T1View');
            $('.grafik .T2View').addClass('pipka');
            $('.grafik .T2View').removeClass('T2View');
            $('.remove').remove();
            $('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');
        }); 
} else if (psy == 3){
        document.getElementById("d2").innerHTML = x;
        document.getElementById("SCORE2").value = x;
        document.getElementById("tablo").style.width = "300px";
        document.getElementById("d1").style.opacity = 1;
        document.getElementById("d2").style.opacity = 1;
         $('.team2Points4').text($('#d2').text());
            $(".remove button").click(function(){
            typear = $(this).data('typea');
            var point = $(abs[psy]).text();
            естьЛиКнопки = 0;
             if (typear == 'Ошибка') {
                Команда2_Ошибка_СтатистикаПоВстрече = parseInt($('.команда2_Ошибка').text()) + 1;
                $('.команда2_Ошибка').text(Команда2_Ошибка_СтатистикаПоВстрече);
                Команда2_Ошибка_Партия4 = parseInt($('.команда2_партия4_Ошибка').text()) + 1;
                $('.команда2_партия4_Ошибка').text(Команда2_Ошибка_Партия4);
            }   
            if (typear == 'Эйс') {
                Команда2_Эйс_СтатистикаПоВстрече = parseInt($('.команда2_Эйс').text()) + 1;
                $('.команда2_Эйс').text(Команда2_Эйс_СтатистикаПоВстрече);
                Команда2_Эйс_Партия4 = parseInt($('.команда2_партия4_Эйс').text()) + 1;
                $('.команда2_партия4_Эйс').text(Команда2_Эйс_Партия4);
            }   
            if (typear == 'Атака') {
                Команда2_Атака_СтатистикаПоВстрече = parseInt($('.команда2_Атака').text()) + 1;
                $('.команда2_Атака').text(Команда2_Атака_СтатистикаПоВстрече);
                Команда2_Атака_Партия4 = parseInt($('.команда2_партия4_Атака').text()) + 1;
                $('.команда2_партия4_Атака').text(Команда2_Атака_Партия4);
            }   
            if (typear == 'Скидка') {
                Команда2_Скидка_СтатистикаПоВстрече = parseInt($('.команда2_Скидка').text()) + 1;
                $('.команда2_Скидка').text(Команда2_Скидка_СтатистикаПоВстрече);
                Команда2_Скидка_Партия4 = parseInt($('.команда2_партия4_Скидка').text()) + 1;
                $('.команда2_партия4_Скидка').text(Команда2_Скидка_Партия4);
            }   
            if (typear == 'Блок') {
                Команда2_Блок_СтатистикаПоВстрече = parseInt($('.команда2_Блок').text()) + 1;
                $('.команда2_Блок').text(Команда2_Блок_СтатистикаПоВстрече);
                Команда2_Блок_Партия4 = parseInt($('.команда2_партия4_Блок').text()) + 1;
                $('.команда2_партия4_Блок').text(Команда2_Блок_Партия4);
            }
            $('.grafik .T2View').text(point + ' ' + typear);
            $('.grafik .T1View').removeClass('T1View');
            $('.grafik .T2View').addClass('pipka');
            $('.grafik .T2View').removeClass('T2View');
            $('.remove').remove();
            $('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');
        }); 
} else if (psy == 4){
        zz = 14;
        document.getElementById("e2").innerHTML = x;
        document.getElementById("SCORE2").value = x;
        document.getElementById("tablo").style.width = "325px";
        document.getElementById("e1").style.opacity = 1;
        document.getElementById("e2").style.opacity = 1;
         $('.team2Points5').text($('#e2').text());
            $(".remove button").click(function(){
            typear = $(this).data('typea');
            var point = $(abs[psy]).text();
            естьЛиКнопки = 0;
             if (typear == 'Ошибка') {
                Команда2_Ошибка_СтатистикаПоВстрече = parseInt($('.команда2_Ошибка').text()) + 1;
                $('.команда2_Ошибка').text(Команда2_Ошибка_СтатистикаПоВстрече);
                Команда2_Ошибка_Партия5 = parseInt($('.команда2_партия5_Ошибка').text()) + 1;
                $('.команда2_партия5_Ошибка').text(Команда2_Ошибка_Партия5);
            }   
            if (typear == 'Эйс') {
                Команда2_Эйс_СтатистикаПоВстрече = parseInt($('.команда2_Эйс').text()) + 1;
                $('.команда2_Эйс').text(Команда2_Эйс_СтатистикаПоВстрече);
                Команда2_Эйс_Партия5 = parseInt($('.команда2_партия5_Эйс').text()) + 1;
                $('.команда2_партия5_Эйс').text(Команда2_Эйс_Партия5);
            }   
            if (typear == 'Атака') {
                Команда2_Атака_СтатистикаПоВстрече = parseInt($('.команда2_Атака').text()) + 1;
                $('.команда2_Атака').text(Команда2_Атака_СтатистикаПоВстрече);
                Команда2_Атака_Партия5 = parseInt($('.команда2_партия5_Атака').text()) + 1;
                $('.команда2_партия5_Атака').text(Команда2_Атака_Партия5);
            }   
            if (typear == 'Скидка') {
                Команда2_Скидка_СтатистикаПоВстрече = parseInt($('.команда2_Скидка').text()) + 1;
                $('.команда2_Скидка').text(Команда2_Скидка_СтатистикаПоВстрече);
                Команда2_Скидка_Партия5 = parseInt($('.команда2_партия5_Скидка').text()) + 1;
                $('.команда2_партия5_Скидка').text(Команда2_Скидка_Партия5);
            }   
            if (typear == 'Блок') {
                Команда2_Блок_СтатистикаПоВстрече = parseInt($('.команда2_Блок').text()) + 1;
                $('.команда2_Блок').text(Команда2_Блок_СтатистикаПоВстрече);
                Команда2_Блок_Партия5 = parseInt($('.команда2_партия5_Блок').text()) + 1;
                $('.команда2_партия5_Блок').text(Команда2_Блок_Партия5);
            }
            $('.grafik .T2View').text(point + ' ' + typear);
            $('.grafik .T1View').removeClass('T1View');
            $('.grafik .T2View').addClass('pipka');
            $('.grafik .T2View').removeClass('T2View');
            $('.remove').remove();
            $('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');
        }); 
}  
    var list = ["party1win", "party2win", "party3win", "party4win", "party5win"];
    i = psy;
    var a = (document.getElementById("GSCORE1").value - 0);
    var b = (document.getElementById("GSCORE2").value - 0);
    var c = (document.getElementById("SCORE1").value - 0);
    var d = (document.getElementById("SCORE2").value - 0); 
    var e = d - c;
    //определение разницы в 2 очка 
    if (d > c) {
        if( e > 1){    
            if (d > zz){
                    var y = document.getElementsByClassName("partyscore1");
                    var w = document.getElementsByClassName("partyscore2");
                    var v = document.getElementById("GSCORE2").value;
                    var z = document.getElementsByClassName(list[i]);
                    for (i = 0; i < z.length; i++) {
                    z[i].style.backgroundColor = '#'+document.getElementById("team2colorCustom").value;
                    y[i].value = 0;w[i].value = 0;
                    document.getElementById("GSCORE2").value = (v-0)+1;
                    document.getElementById("point2").innerHTML = document.getElementById("GSCORE2").value;
                    z[i].style.border = "1px solid gray";
            $(".remove button").click(function(){
            typear = $(this).data('typea');
            var point = $(abs[psy]).text();
            $('.grafik .T2View').text(point + ' ' + typear);
            $('.grafik .T1View').removeClass('T1View');
            $('.grafik .T2View').addClass('pipka');
            $('.grafik .T2View').removeClass('T2View');
            $('.remove').remove();
            $('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');
        });
                    }   
            }
        }
    }
}
function lessPointForTeam2(){
    var psy = (document.getElementById("GSCORE1").value - 0) + (document.getElementById("GSCORE2").value - 0);
    var x = document.getElementById("SCORE2").value;
        x--;
        if (x > -1){
    if (psy == 0) {
        document.getElementById("a2").innerHTML = x;
        document.getElementById("SCORE2").value = x;
} else if (psy == 1){ 
        document.getElementById("b2").innerHTML = x;
        document.getElementById("SCORE2").value = x;
} else if (psy == 2){
        document.getElementById("c2").innerHTML = x;
        document.getElementById("SCORE2").value = x;
} else if (psy == 3){
        document.getElementById("d2").innerHTML = x;
        document.getElementById("SCORE2").value = x;
} else {
        document.getElementById("e2").innerHTML = x;
        document.getElementById("SCORE2").value = x;
}}}
function team1name() {
x = document.getElementById("team1name").value;
document.getElementById("team1").innerHTML = x;
if (x == ""){
    document.getElementById("team1").innerHTML = "DreamTeam 1"
}
/*var Color1 = "red";
var Color2 = "yellow";
$("#team1").css({background: 'linear-gradient(to right, #222222 60% , '+Color1+', '+Color2+')'});*//*что б не забыть. через jquery назначает бацкграунд*/

}
function team2name() {
    x = document.getElementById("team2name").value;
document.getElementById("team2").innerHTML = x;
if (x == ""){
    document.getElementById("team2").innerHTML = "DreamTeam 2"
}
}

function radio1(){
    document.getElementById("podacha1").style.opacity = 1;
    document.getElementById("podacha2").style.opacity = 0;
    
}
function radio2(){
    document.getElementById("podacha1").style.opacity = 0;
    document.getElementById("podacha2").style.opacity = 1;
}

