$(document).ready(function(){
  // Função para verificar quando o usuário rola a página
  $(window).scroll(function() {
    // Obtém a posição vertical da página
    var scrollPos = $(window).scrollTop();

    // Verifica a posição das seções e destaca o item do menu correspondente
    $('.section').each(function() {
      var offsetTop = $(this).offset().top;
      var sectionId = $(this).attr('id');

      if (scrollPos >= offsetTop - 70) {
        // Remove a classe 'active' de todos os itens do menu
        $('.menu > li').removeClass('active');
        // Adiciona a classe 'active' ao item do menu correspondente à seção atual
        $('a[href="#' + sectionId + '"]').parent().addClass('active');
      }
    });
  });
});