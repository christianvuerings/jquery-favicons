jQuery.fn.favicons=function(c){var b=jQuery.extend({classname:"favicon",service:"http://g.etfv.co/__URL__"},c);return this.each(function(){var a=$(this),d=b.service.replace("__URL__",a.attr("href")).replace("__DOMAIN__",a.attr("href").replace("http://","").replace("https://",""));a.css("background-image","url("+d+")").addClass(b.classname)})};
