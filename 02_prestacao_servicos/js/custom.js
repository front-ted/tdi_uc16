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

    var btn_painel_01;
    var btn_painel_02;
    var btn_painel_03;
    var btn_painel_04;
    var btn_painel_05;
    var btn_painel_06;
    var btn_painel_07;
    var btn_painel_08;
    var btn_painel_09;

    $(".btn-prestacao").on('click', function(){
        localStorage.setItem('btn_painel_01', 'check');
        $(this).css("background-image","url('imgs/bt01_hover.png')");
        $(".txt01").css("background-color","#E73D31");
    })
    $(".btn-proposta").on('click', function(){
        localStorage.setItem('btn_painel_02', 'check');
        $(this).css("background-image","url('imgs/bt02_hover.png')");
        $(".txt02").css("background-color","#E73D31");
    })
    $(".btn-precificacao").on('click', function(){
        localStorage.setItem('btn_painel_03', 'check');
        $(this).css("background-image","url('imgs/bt03_hover.png')");
        $(".txt03").css("background-color","#E73D31");
    })
    $(".btn-contrato").on('click', function(){
        localStorage.setItem('btn_painel_04', 'check');
        $(this).css("background-image","url('imgs/bt04_hover.png')");
        $(".txt04").css("background-color","#E73D31");
    })
    $(".btn-projeto").on('click', function(){
        localStorage.setItem('btn_painel_05', 'check');
        $(this).css("background-image","url('imgs/bt05_hover.png')");
        $(".txt05").css("background-color","#E73D31");
    })
    $(".btn-as_built").on('click', function(){
        localStorage.setItem('btn_painel_06', 'check');
        $(this).css("background-image","url('imgs/bt06_hover.png')");
        $(".txt06").css("background-color","#E73D31");
    })
    $(".btn-execucao").on('click', function(){
        localStorage.setItem('btn_painel_07', 'check');
        $(this).css("background-image","url('imgs/bt07_hover.png')");
        $(".txt07").css("background-color","#E73D31");
    })
    $(".btn-acompanhamento").on('click', function(){
        localStorage.setItem('btn_painel_08', 'check');
        $(this).css("background-image","url('imgs/bt08_hover.png')");
        $(".txt08").css("background-color","#E73D31");
    })
    $(".btn-encerramento").on('click', function(){
        localStorage.setItem('btn_painel_09', 'check');
        $(this).css("background-image","url('imgs/bt09_hover.png')");
        $(".txt09").css("background-color","#E73D31");
    })

    btn_painel_01 = localStorage.getItem('btn_painel_01');
    btn_painel_02 = localStorage.getItem('btn_painel_02');
    btn_painel_03 = localStorage.getItem('btn_painel_03');
    btn_painel_04 = localStorage.getItem('btn_painel_04');
    btn_painel_05 = localStorage.getItem('btn_painel_05');
    btn_painel_06 = localStorage.getItem('btn_painel_06');
    btn_painel_07 = localStorage.getItem('btn_painel_07');
    btn_painel_08 = localStorage.getItem('btn_painel_08');
    btn_painel_09 = localStorage.getItem('btn_painel_09');

    if (btn_painel_01 == 'check') {
        $(".btn-prestacao").css("background-image","url('imgs/bt01_hover.png')");
        $(".txt01").css("background-color","#E73D31");
    }
    if (btn_painel_02 == 'check') {
        $(".btn-proposta").css("background-image","url('imgs/bt02_hover.png')");
        $(".txt02").css("background-color","#E73D31");
    }
    if (btn_painel_03 == 'check') {
        $(".btn-precificacao").css("background-image","url('imgs/bt03_hover.png')");
        $(".txt03").css("background-color","#E73D31");
    }
    if (btn_painel_04 == 'check') {
        $(".btn-contrato").css("background-image","url('imgs/bt04_hover.png')");
        $(".txt04").css("background-color","#E73D31");
    }
    if (btn_painel_05 == 'check') {
        $(".btn-projeto").css("background-image","url('imgs/bt05_hover.png')");
        $(".txt05").css("background-color","#E73D31");
    }
    if (btn_painel_06 == 'check') {
        $(".btn-as_built").css("background-image","url('imgs/bt06_hover.png')");
        $(".txt06").css("background-color","#E73D31");
    }
    if (btn_painel_07 == 'check') {
        $(".btn-execucao").css("background-image","url('imgs/bt07_hover.png')");
        $(".txt07").css("background-color","#E73D31");
    }
    if (btn_painel_08 == 'check') {
        $(".btn-acompanhamento").css("background-image","url('imgs/bt08_hover.png')");
        $(".txt08").css("background-color","#E73D31");
    }
    if (btn_painel_09 == 'check') {
        $(".btn-encerramento").css("background-image","url('imgs/bt09_hover.png')");
        $(".txt09").css("background-color","#E73D31");
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