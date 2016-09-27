$(function(){
  $('#f').on('change', function(ev) {
    var f = ev.target.files[0];
    var fr = new FileReader();
    
    fr.onload = function(ev2) {
        //console.dir(ev2);
        $('#i').attr('src', ev2.target.result);
       // добавление в галерею загруженного изображения
       addArrImg(ev2.target.result);
       
        
    };
    fr.readAsDataURL(f);
});
  // Массив с фото
  var arrImg =[];
  
  // Добавляет загруженное изображение в массив
 function addArrImg(src){
   arrImg.push({id:arrImg.length-1, src:src})
        $('<img />')
        .attr('src', src)
        .attr('id', arrImg.length-1)
        .addClass('gallery')
        .appendTo('div.gallery');
 }
 
  // Добавление загруженных фото в галерею
  /*function addImgToGallery(){
   for( var i=0; i<arrImg.length; i++ ){
      var tmpImg = $('<img />')
        .attr('src', arrImg[i].src)
        .attr('id', arrImg.length)
        .addClass('gallery')
        .appendTo('div.gallery');
        
   } 
  }*/
 
});
$(function(){
  $('div.gallery').delegate('img.gallery','click',(function(){                                   // При нажатиина миниатюру
    var images = $(this);
    var imgSrc = images.attr('src');
    var imgId = images.attr('id');
 
    $(".big-image img").attr({ src: imgSrc, id: imgId });         // Подменяем адрес большого изображения на адрес выбранного
    $(this).siblings('img').removeClass('active');                // Удаляем класс .active со ссылки чтоб убрать рамку
    $(this).addClass('active');                                   // Добавляем класс .active на выбранную миниатюру
    return false;
  }));
  })
  // Переход к следующему изображению через минигалерею
  // кнопка 'next'
  $('div#next').click(function(){
    //var images = $('div.gallery').delegate('img.gallery.active')
  })
  // кнопка 'prev'
  $('div#prev').click(function(){
    //var images = $('div.gallery').delegate('img.gallery.active')
  })
