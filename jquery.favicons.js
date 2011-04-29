/**
 * Add favicon images to links on the page
 * @param {Object} config Configuration options
 */
jQuery.fn.favicons = function(config){
  var settings = jQuery.extend({
    'class': 'favicon',
    'service': 'http://g.etfv.co/__URL__'
  }, config);

  // Return this object to maintain chainability
  return this.each(function(){
    var link = $(this);
    var url = settings.service.replace('__URL__' , link.attr('href')).replace('__DOMAIN__', link.attr('href').replace('http://','').replace('https://', ''));
    link.css('background-image', 'url(' + url + ')').addClass(settings.class);
  });
};