function centralizarDiv() {
    const container = document.querySelector('body');
    const div = document.querySelector('#app');
    const larguraContainer = container.offsetWidth;
    const alturaContainer = container.offsetHeight;
    const fatorEscala = Math.min(larguraContainer / 1920, alturaContainer / 1080);
  
    div.style.transform = `scale(${fatorEscala})`;
  }

function init(){
   
   centralizarDiv(); // Centraliza a div inicialmente

   window.addEventListener('resize', centralizarDiv);
}

function resetarPergunta(){
   $(".voltar, .opcao").attr( "disabled", false);
   $(".opcao").removeClass("inativo");
   $("#feedbacks").addClass("d-none");
   $(".render").css("opacity","1");
   $(".alternativa").removeClass("inativa selecionada");
   $(".feed-positivo, .feed-negativo").removeClass("d-none");
   if(idPerguntaAtual != "pergunta1"){
      $(".etapas").attr( "disabled", false);
   }

   
}
function pergunta(id) {
   $(".pergunta, .resposta").addClass("d-none");
   $(".pergunta > .conteudo").removeClass("d-none");
   $("#pergunta" + id).removeClass("d-none");
   idPerguntaAtual = "pergunta" + id;
}
var perguntasVencidas = 1;
function validaResposta(resp) {


      let idPergunta = Number(idPerguntaAtual.replace("pergunta","")) - 1;
      $("#"+idPerguntaAtual + " .render").css("opacity","0.5");
      $(".voltar").attr( "disabled", true);
      $(".opcao").not(":nth-child(" + resp + ")").attr( "disabled", true);
      $(".opcao .alternativa").addClass("inativa");
      $(".opcao:nth-child(" + resp + ")").children(".alternativa").removeClass( "inativa").addClass("selecionada");
      $(".opcao:nth-child(" + resp + ")").addClass("inativo")
      $("#feedbacks").removeClass("d-none");
      $(".feed-positivo, .feed-negativo").removeClass("d-block");
      $("#"+idPerguntaAtual + " .etapas").attr("disabled", true)
      if(respostas[idPergunta] == resp){
         $(".feed-positivo").addClass("d-block");
         executarSom("feed-positivo")
         perguntasVencidas++;
      }else{
         $(".feed-negativo").addClass("d-block");
         executarSom("feed-negativo")
      }
  
}
function executarSom(tipo){
   let som = new Audio();
   switch(tipo){
      case "mouse":
         som.src = "assets/som/mouse.mp3";
         break;
      case "feed-positivo":
         som.src = "assets/som/feed-positivo.mp3";
         break;
      case "feed-negativo":
         som.src = "assets/som/feed-negativo.mp3";
         break;
   }
   som.play()
}

function fimdejogo(){
   resetarPergunta();
   $("#perguntas").addClass("d-none");
   $("#encerramento").removeClass("d-none")
}

var respostas = [1,2,3,2,1,3,3,1,3,2,3];
var idPerguntaAtual = "pergunta1";

 $(function (){
    init();

   $(".responda, .voltar, .continuar, .repetir, .comecar, .iniciar, .reiniciar, .fechar").on("click", function(){
      executarSom("mouse");
   });

   $(".responda").click(function (){
      idPerguntaAtual = $(this).parents(".pergunta").attr("id");
      $("#" + idPerguntaAtual + " .conteudo").addClass("d-none");
      $("#" + idPerguntaAtual + " .respostas").removeClass("d-none");
   });

   $(".opcao").click(function (){
      let idResp = Number($(this).index()) + 1;
      validaResposta(idResp);
   })
   $(".voltar").click(function (){
      $("#" + idPerguntaAtual + " .conteudo").removeClass("d-none");
      $("#" + idPerguntaAtual + " .respostas").addClass("d-none");
   });
   $(".repetir").click(function (){
      resetarPergunta();
   });
   $("#intro .continuar").click(function (){
      $("#intro .conteudo.conteudo1").addClass("d-none")
      $("#intro .conteudo.conteudo2").removeClass("d-none")
   });
   $("#feedbacks .continuar").click(function (){
      if(perguntasVencidas >= 12){ 
         fimdejogo(); 
      }else{
         resetarPergunta();
      pergunta(perguntasVencidas);
      resetarEtapas(); 
      }
      
   });
   $(".comecar").click(function(){
      $("#capa").addClass("d-none");
      $("#intro").removeClass("d-none");
   })
   $(".iniciar").click(function(){
      $("#intro").addClass("d-none");
      $("#perguntas").removeClass("d-none");
   });
   $(".reiniciar").click(function (){
      location.reload();
   });
   $(".etapas").click(function (){
      $("#etapas").removeClass("d-none");
      $("#"+idPerguntaAtual + " .render").css("opacity","0.5");
      $(".opcao, .voltar, .etapas").attr( "disabled", true);

   });
   $("#etapas .fechar").click(function (){
      $("#etapas").addClass("d-none");
      $(".opcao, .voltar, .etapas").attr( "disabled", false);
      $("#"+idPerguntaAtual + " .render").css("opacity","1");

   });
   

   var contador = 1; // Initialize the counter
   function resetarEtapas(){
      contador = perguntasVencidas; // Reset the counter to the latest question
   
     // Update modal content with the current question's information
     $("#etapas .imagem").attr("style", "");
     $("#etapas .imagem:nth-child(1)").css("display","block")
     var valorLimpo = $("#pergunta1 .respostas .opcoes > .opcao:nth-child(1)").text();
      valorLimpo = valorLimpo.replace(/\s+/g, ' ');
     $("#etapas .texto").text(valorLimpo);
     $("#etapas .titulo_etapa > span").text(1);
      contador = 1;
      $(".proximo").attr("disabled", false);
      $(".anterior").attr("disabled", true);
   
     btoAtivaInativa();
   }
   function btoAtivaInativa(){
   
      // Correct the "Next" button logic:
      if(contador >= perguntasVencidas - 1){ // Disable if at the last answered question
         $(".proximo").attr("disabled", true);
         $(".proximo").attr("aria-hidden", true);
      } else {
         $(".proximo").attr("disabled", false);
         $(".proximo").attr("aria-hidden", false);
      }
   
      // "Previous" button logic (you might need to adjust this as well):
      if(contador > 1){ // Disable "Previous" if on the first question
         $(".anterior").attr("disabled", false);
         $(".anterior").attr("aria-hidden", false);
      } else {
         $(".anterior").attr("disabled", true);
         $(".anterior").attr("aria-hidden", true);
      }
   }

   $(".proximo").click(function() {   
     // Ensure contador doesn't exceed the total number of questions
     if (contador < perguntasVencidas-1) { 
       contador++; 
   
       // Update modal content with the next question's information

       
       $("#etapas .imagem:nth-child(" + contador + ")").fadeIn(500, function (){
         $("#etapas .imagem:nth-child(" + (contador-1) + ")").attr( "style", "")
       });
       var valorLimpo = $("#pergunta" + contador + " .respostas .opcoes > .opcao:nth-child(" + respostas[contador-1] + ")").text();
       valorLimpo = valorLimpo.replace(/\s+/g, ' ');
       $("#etapas .texto").text(valorLimpo);
       $("#etapas .titulo_etapa > span").text(contador);
   
       // Update button states (enable/disable based on current question)
       btoAtivaInativa(); 
     } else {
       // Handle the case where you're at the last available question summary
       // You might want to disable the "Next" button or display a message
       btoAtivaInativa();
     }
   });
   $(".anterior").click(function (){ 
      if (contador > 1) { // Only proceed if not on the first question summary
         contador--;

         $("#etapas .imagem:nth-child(" + contador + ")").css("display", "block");
         $("#etapas .imagem:nth-child(" + (contador + 1) + ")").fadeOut(500);
         
         var valorLimpo = $("#pergunta" + contador + " .respostas .opcoes > .opcao:nth-child(" + respostas[contador-1] + ")").text();
         valorLimpo = valorLimpo.replace(/\s+/g, ' ');
         $("#etapas .texto").text(valorLimpo);
         $("#etapas .titulo_etapa > span").text(contador);

         btoAtivaInativa();
      } else {
         btoAtivaInativa(); 
      }
   });
 })