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

    var btn_alvo_01;
    var btn_alvo_02;
    var btn_alvo_03;
    var btn_alvo_04;
    var btn_alvo_05;

    $(".btn-necessidades").on('click', function(){
        localStorage.setItem('btn_alvo_01', 'check');
        $(this).css("background-image","url('imgs/bt1_hover.png')");
        $("#img-dardo01").addClass("img-dardo01");
    })
    $(".btn-especificidades").on('click', function(){
        localStorage.setItem('btn_alvo_02', 'check');
        $(this).css("background-image","url('imgs/bt2_hover.png')");
        $("#img-dardo02").addClass("img-dardo02");
    })
    $(".btn-comportamento").on('click', function(){
        localStorage.setItem('btn_alvo_03', 'check');
        $(this).css("background-image","url('imgs/bt3_hover.png')");
        $("#img-dardo03").addClass("img-dardo03");
    })
    $(".btn-perfis_clientes").on('click', function(){
        localStorage.setItem('btn_alvo_04', 'check');
        $(this).css("background-image","url('imgs/bt4_hover.png')");
        $("#img-dardo04").addClass("img-dardo04");
    })
    $(".btn-criacao_persona").on('click', function(){
        localStorage.setItem('btn_alvo_05', 'check');
        $(this).css("background-image","url('imgs/bt5_hover.png')");
        $("#img-dardo05").addClass("img-dardo05");
    })

    btn_alvo_01 = localStorage.getItem('btn_alvo_01');
    btn_alvo_02 = localStorage.getItem('btn_alvo_02');
    btn_alvo_03 = localStorage.getItem('btn_alvo_03');
    btn_alvo_04 = localStorage.getItem('btn_alvo_04');
    btn_alvo_05 = localStorage.getItem('btn_alvo_05');

    if (btn_alvo_01 == 'check') {
        $(".btn-necessidades").css("background-image","url('imgs/bt1_hover.png')");
        $("#img-dardo01").addClass("img-dardo01");
    }
    if (btn_alvo_02 == 'check') {
        $(".btn-especificidades").css("background-image","url('imgs/bt2_hover.png')");
        $("#img-dardo02").addClass("img-dardo02");
    }
    if (btn_alvo_03 == 'check') {
        $(".btn-comportamento").css("background-image","url('imgs/bt3_hover.png')");
        $("#img-dardo03").addClass("img-dardo03");
    }
    if (btn_alvo_04 == 'check') {
        $(".btn-perfis_clientes").css("background-image","url('imgs/bt4_hover.png')");
        $("#img-dardo04").addClass("img-dardo04");
    }
    if (btn_alvo_05 == 'check') {
        $(".btn-criacao_persona").css("background-image","url('imgs/bt5_hover.png')");
        $("#img-dardo05").addClass("img-dardo05");
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