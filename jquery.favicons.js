/**
 * jQuery Favicons Plug-in v0.1
 * Add favicon images to links on a page
 * 
 * Copyright 2011, Christian Vuerings - http://denbuzze.com
 * License: https://github.com/christianv/jquery-favicons/raw/master/LICENSE
 */
jQuery.fn.favicons = function(config){
  var settings = jQuery.extend({
    "classname": "favicon",
    "service": "http://g.etfv.co/__URL__"
  }, config);

  // Return this object to maintain chainability
  return this.each(function(){
    var link = $(this);
    var url = settings.service
                .replace("__URL__" , link.attr("href"))
                .replace("__DOMAIN__", link.attr("href")
                .replace("http://","").replace("https://", ""));
    link.css("background-image", "url(" + url + ")")
                .addClass(settings.classname);
  });
};