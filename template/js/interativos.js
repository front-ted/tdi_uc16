var FXManager = {
    snd_certo : new Audio("objetos/snd/acerto.mp3"),
    snd_erro : new Audio("objetos/snd/erro.mp3"),
    snd_aplauso : new Audio("objetos/snd/aplauso.mp3"),
}

var Atividade01 = {
    init:function(){
        console.log('init atividade 01');

        $('.atividade01').on('change', function(){
            $(this).parent().removeClass('certo');
            $(this).parent().removeClass('errado');
            console.log('selected = ',$(this).val());
            console.log('default =',$(this).data("def"));
            if($(this).val() == $(this).data("def")){
                $(this).parent().addClass('certo');
                $(this).closest('ul').find('li.feedback-negativo').css('display','none');
                $(this).closest('ul').find('li.feedback-positivo').css('display','block');
                FXManager.snd_certo.play();
                if($(".ol-atividade01 li.certo").length == 3)
                    FXManager.snd_aplauso.play();
            }else{
                $(this).parent().addClass('errado');
                    FXManager.snd_erro.play();
                    $(this).closest('ul').find('li.feedback-negativo').css('display','block');
                    $(this).closest('ul').find('li.feedback-positivo').css('display','none');
            }
        })
    }
}

var Atividade02 = {
    init:function(){
        console.log('init atividade 02');

        $('.atividade02').on('change', function(){
            $(this).parent().removeClass('certo');
            $(this).parent().removeClass('errado');
            console.log('selected = ',$(this).val());
            console.log('default =',$(this).data("def"));
            if($(this).val() == $(this).data("def")){
                $(this).parent().addClass('certo');
                FXManager.snd_certo.play();
                if($(".ol-atividade01 li.certo").length == 2)
                    FXManager.snd_aplauso.play();
            }else{
                $(this).parent().addClass('errado')/
                    FXManager.snd_erro.play();
            }
        })
    }
}

/**
 *Bem simples, coloca a classe esquemaDaBru no container, e alt-c na alternativa certa ,
  alt-e na alternativa errada
 */

var EsquemaDaBru = {
    init: function(){
        console.log('Esquema init')
        eb = this;
        $(".esquemaDaBru .alt-e").on('click', function(){           
            eb.clear(this);
            $(this).addClass('errado');
            FXManager.snd_erro.play();
            
        })
        $(".esquemaDaBru .alt-c").on('click', function(){            
            eb.clear(this);
            $(this).addClass('certo');
            FXManager.snd_certo.play();
            eb.check(this);
           
        })
        //acessibilidade
        $('.enunciado').attr('tabindex',0);
        // $('.enunciado').attr('role','dialog');
        $('.esquemaDaBru .alt-c,.esquemaDaBru .alt-e').attr('title','alternativa: ')
       

    },
    clear: function(el){      
        $(el).parent().find('.alt-c').removeClass('certo');
        $(el).parent().find('.alt-e').removeClass('errado');
    },
    check: function(el){
        console.log('check')
        if($(el).parent().parent().find('.esquemaDaBru .certo').length == $(el).parent().parent().find('.esquemaDaBru').length){
            FXManager.snd_aplauso.play();
        }
    }
}

$(document).ready(function(){
    Atividade01.init();
    EsquemaDaBru.init()
    Atividade02.init();
})