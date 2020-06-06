
$(window).on("load",function(){

   // плавный скролл по якорю
   $("a[rel='mPageScroll2id']").mPageScroll2id();
   // видеофон
   $('.header').vide('video/anya', {
      // фон до загрузки видео
      bgColor: '#666'
   });
   $('.section__content-travels').vide('video/travels', {
      // фон до загрузки видео
      bgColor: '#666'
   });
   $('.section__content-tyumen').vide('video/tyumen', {
      // фон до загрузки видео
      bgColor: '#666'
   });
   $('.section__content-house').vide('video/house', {
      // фон до загрузки видео
      bgColor: '#666'
   });
   $('.section__content-wedding').vide('video/wedding', {
      // фон до загрузки видео
      bgColor: '#666'
   });
   $('.wedding__garden').vide('video/park', {
      // фон до загрузки видео
      bgColor: '#666'
   });
   $('.wedding__zags').vide('video/zags', {
      // фон до загрузки видео
      bgColor: '#666'
   });

// вместо wow

$(window).scroll(function() {
   $('#learn .section-tittle').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+650) {
         $(this).addClass('fadeInLeft');
      }
   });
});


});


