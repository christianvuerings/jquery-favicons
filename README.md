# jQuery favicons plugin

## About

Add favicons to anchor elements on your page

## Config
* `class`:
Name of the CSS class
(default: "favicon")

* `service`:
URL of the service you want to use.
`__URL__` will be replaced by the complete URL.
`__DOMAIN__` will be replaced by the URL without `http://` or `https://`.
(default: "http://g.etfv.co/__URL__")

## Features
* Chainable
	```javascript
	$('a').favicons().css('color', '#ff0000');
	```

* Different services
	```javascript
	$('a').favicons({
	  'service': 'http://www.getfavicon.org/?url=__DOMAIN__'
	});
	```

* Change default icon
	```javascript
	$('a').favicons({
	  'service': 'http://g.etfv.co/__URL__?defaulticon=http://www.google.com/favicon.ico'
	});
	```

## Inspiration
[http://andreaslagerkvist.com/jquery/favicons/](http://andreaslagerkvist.com/jquery/favicons/)
[http://github.com/shuber/jquery-favicons](http://github.com/shuber/jquery-favicons)