  /* ESTE ES EL CODIGO JQUERY PARA EVENTO SCROLL DEL MENU*/
  $(document).ready(function(){
  var altura = $('.ContenedorMenu').offset().top;
  
  $(window).on('scroll', function(){
    if ( $(window).scrollTop() > altura ){
      $('.ContenedorMenu').addClass('menu-fixed');
    } else {
      $('.ContenedorMenu').removeClass('menu-fixed');
    }
  });
 
});

  /*-------------------------------------------------------------------------------------------------------------*/

/* EFECTO PARA APARECER EL SLIDER LUEGO DEL ICONO */
 $(document).ready(function() {
    setTimeout(function() {
        $(".materialOut").fadeOut(1200);
    },8000);
	
	setTimeout(function() {
        $(".SliderIn").fadeIn(1200);
    },10000);
});

/*---------------------------------------------------------------------------------------------------------------*/