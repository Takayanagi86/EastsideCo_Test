$(document).ready(function(){
  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    arrows: false,
    draggable: true,
  });
});

$(document).ready(function() {
  var sections = new theme.Sections();
  sections.register('collections-list-template', theme.FeaturedCollections);
  sections.register('collection-row-section', theme.CollectionRows);
  sections.register('collection-template', theme.Collection);
  sections.register('header-section', theme.HeaderSection);
  sections.register('list-collections-template', theme.ListCollections);
  sections.register('map-section', theme.Maps);
  sections.register('product-template', theme.Product);
  sections.register('slideshow-section', theme.SlideshowSection);
});


