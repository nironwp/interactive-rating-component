jQuery(function($){
     var elementos = $('.options .option p')
     var valor = 0;
     var trade = $('.container-thank .il-thank .p p span')

     $(document).ready(function(){
          $(".options .option").on('click',function(){
              $(".options .option").removeClass("buttonClicked");
              $(this).addClass("buttonClicked");
              
          });
        });
     
     
     $('.options .option ').on("click" ,function(el){
          var valor = $(this).attr('vlr');
          $(".initial-state").on("submit",function(e){
               e.preventDefault(); 
               console.log(valor)
               $('.container-initial').removeClass('active')
               $('.container-initial').addClass('inactive')
               $('.container-thank').removeClass('inactive')
               $('.container-thank').addClass('active')
               trade.html(valor)
          });
     })
});