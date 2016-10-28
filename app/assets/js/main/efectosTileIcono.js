  /* ESTE ES EL CODIGO JQUERY PARA EVENTO SCROLL DEL MENU*/


  $(function(){
   
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 40) {
            $('.MenuLoguin').addClass('menu-fixed');
        }
        else {
            $('.MenuLoguin').removeClass('menu-fixed');
        }
    });
});



  $(function(){
   
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 30) {
            $('.ContenedorMenu').addClass('menu-fixed');
        }
        else {
            $('.ContenedorMenu').removeClass('menu-fixed');
        }
    });
});

  /*-------------------------------------------------------------------------------------------------------------*/

/* EFECTO PARA APARECER EL SLIDER LUEGO DEL ICONO */
 $(document).ready(function() {
    setTimeout(function() {
        $(".materialOut").fadeOut(1200);
    },7000);
	
	setTimeout(function() {
        $(".SliderIn").fadeIn(1200);
    },10000);
});

/*---------------------------------------------------------------------------------------------------------------*/