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



//-------- PAINEL SCRUM --------\\

document.getElementById("btn-scrum01").onmouseover = function(){
    document.getElementById("txt-scrum01").style.display = "block";
};
document.getElementById("btn-scrum01").onmouseout = function(){
    document.getElementById("txt-scrum01").style.display = "none";
};

document.getElementById("btn-scrum02").onmouseover = function(){
    document.getElementById("txt-scrum02").style.display = "block";
};
document.getElementById("btn-scrum02").onmouseout = function(){
    document.getElementById("txt-scrum02").style.display = "none";
};

document.getElementById("btn-scrum03").onmouseover = function(){
    document.getElementById("txt-scrum03").style.display = "block";
};
document.getElementById("btn-scrum03").onmouseout = function(){
    document.getElementById("txt-scrum03").style.display = "none";
};

document.getElementById("btn-scrum04").onmouseover = function(){
    document.getElementById("txt-scrum04").style.display = "block";
};
document.getElementById("btn-scrum04").onmouseout = function(){
    document.getElementById("txt-scrum04").style.display = "none";
};

document.getElementById("btn-scrum05").onmouseover = function(){
    document.getElementById("txt-scrum05").style.display = "block";
};
document.getElementById("btn-scrum05").onmouseout = function(){
    document.getElementById("txt-scrum05").style.display = "none";
};

document.getElementById("btn-scrum06").onmouseover = function(){
    document.getElementById("txt-scrum06").style.display = "block";
};
document.getElementById("btn-scrum06").onmouseout = function(){
    document.getElementById("txt-scrum06").style.display = "none";
};

document.getElementById("btn-scrum07").onmouseover = function(){
    document.getElementById("txt-scrum07").style.display = "block";
};
document.getElementById("btn-scrum07").onmouseout = function(){
    document.getElementById("txt-scrum07").style.display = "none";
};

document.getElementById("btn-scrum08").onmouseover = function(){
    document.getElementById("txt-scrum08").style.display = "block";
};
document.getElementById("btn-scrum08").onmouseout = function(){
    document.getElementById("txt-scrum08").style.display = "none";
};

document.getElementById("btn-scrum09").onmouseover = function(){
    document.getElementById("txt-scrum09").style.display = "block";
};
document.getElementById("btn-scrum09").onmouseout = function(){
    document.getElementById("txt-scrum09").style.display = "none";
};

//-------- /PAINEL SCRUM --------\\


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