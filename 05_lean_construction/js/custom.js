var FXManager = {
    snd_certo : new Audio("objetos/snd/acerto.mp3"),
    snd_erro : new Audio("objetos/snd/erro.mp3"),
    snd_aplauso : new Audio("objetos/snd/aplauso.mp3")
}

$(".menu label.menu-toggle").click(function(){
    $(".bg-fundo").toggleClass("mod");
    $('body').toggleClass('overflow');
    $('.menu').toggleClass('fade-check');
});

$(".bg-fundo").click(function(){
    $(this).removeClass("mod");
    $('body').removeClass('overflow');
    $('.menu').removeClass('fade-check');
});

$(".fundo-item").click(function(){
    $(".bg-fundo").removeClass("mod");
    $('body').removeClass('overflow');
    $('.menu').removeClass('fade-check');
});



//-------- CHECK PAINEL --------\\

$(document).ready(function () {

    //localStorage.clear()

    var btn_mapa_01;
    var btn_mapa_02;
    var btn_mapa_03;
    var btn_mapa_04;
    var btn_mapa_05;
    var btn_mapa_06;
    var btn_mapa_07;

    $(".btn-shoppings").on('click', function(){
        localStorage.setItem('btn_mapa_01', 'check');
        $(this).css("background-image","url('imgs/painel_bt06_ok.png')");
    })
    $(".btn-centros_comerciais").on('click', function(){
        localStorage.setItem('btn_mapa_02', 'check');
        $(this).css("background-image","url('imgs/painel_bt07_ok.png')");
    })
    $(".btn-lojas_rua").on('click', function(){
        localStorage.setItem('btn_mapa_03', 'check');
        $(this).css("background-image","url('imgs/painel_bt03_ok.png')");
    })
    $(".btn-galerias_comerciais").on('click', function(){
        localStorage.setItem('btn_mapa_04', 'check');
        $(this).css("background-image","url('imgs/painel_bt01_ok.png')");
    })
    $(".btn-open_mall").on('click', function(){
        localStorage.setItem('btn_mapa_05', 'check');
        $(this).css("background-image","url('imgs/painel_bt04_ok.png')");
    })
    $(".btn-aeroportos").on('click', function(){
        localStorage.setItem('btn_mapa_06', 'check');
        $(this).css("background-image","url('imgs/painel_bt02_ok.png')");
    })
    $(".btn-e_commerce").on('click', function(){
        localStorage.setItem('btn_mapa_07', 'check');
        $(this).css("background-image","url('imgs/painel_bt05_ok.png')");
    })

    btn_mapa_01 = localStorage.getItem('btn_mapa_01');
    btn_mapa_02 = localStorage.getItem('btn_mapa_02');
    btn_mapa_03 = localStorage.getItem('btn_mapa_03');
    btn_mapa_04 = localStorage.getItem('btn_mapa_04');
    btn_mapa_05 = localStorage.getItem('btn_mapa_05');
    btn_mapa_06 = localStorage.getItem('btn_mapa_06');
    btn_mapa_07 = localStorage.getItem('btn_mapa_07');

    if (btn_mapa_01 == 'check') {
        $(".btn-shoppings").css("background-image","url('imgs/painel_bt06_ok.png')");
    }
    if (btn_mapa_02 == 'check') {
        $(".btn-centros_comerciais").css("background-image","url('imgs/painel_bt07_ok.png')");
    }
    if (btn_mapa_03 == 'check') {
        $(".btn-lojas_rua").css("background-image","url('imgs/painel_bt03_ok.png')");
    }
    if (btn_mapa_04 == 'check') {
        $(".btn-galerias_comerciais").css("background-image","url('imgs/painel_bt01_ok.png')");
    }
    if (btn_mapa_05 == 'check') {
        $(".btn-open_mall").css("background-image","url('imgs/painel_bt04_ok.png')");
    }
    if (btn_mapa_06 == 'check') {
        $(".btn-aeroportos").css("background-image","url('imgs/painel_bt02_ok.png')");
    }
    if (btn_mapa_07 == 'check') {
        $(".btn-e_commerce").css("background-image","url('imgs/painel_bt05_ok.png')");
    }

});

//-------- /CHECK PAINEL --------\\


/*
jQuery("document").ready(function($){

    var pg_number = parseInt(window.location.href.split('?')[1].split('=')[1]);
  
    if(pg_number == 1){
      document.body.style.backgroundImage = "url('objetos/bg01.png')";
    }else if(pg_number == 2){
      document.body.style.backgroundImage = "url('objetos/bg02.png')";
    }
    
});
*/