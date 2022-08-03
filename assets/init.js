document.querySelector('.slider-type').classList.add('slider-type-'+sliderCount);
document.querySelector('.slider-type-'+sliderCount).classList.remove('slider-type');

sliderTypeCount = '.slider-type-'+sliderCount;




    $(document).ready(function(){
      $('.autoplay').slick({
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
  	});



sliderCount += 1
