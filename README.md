# jQuery favicons plugin

Add favicons to anchor elements on your page

![Preview of the plugin](http://f.cl.ly/items/0Y3K3v1D3W2k0F412v0O/Screen%20shot%202011-04-29%20at%2015.32.16.png)

## Configuration

The plugin accepts 1 argument, which is the config object.

```javascript
$('a').favicons({
  'classname': 'sakai-favicon',
  'service': 'http://g.etfv.co/__URL__?defaulticon=http://www.google.com/favicon.ico'
});
```

* `classname`: Name of the CSS class  
(default: "favicon")

* `service`: URL of the service you want to use.  
(default: "http://g.etfv.co/\_\_URL\_\_")  
`__URL__` will be replaced by the complete URL.  
`__DOMAIN__` will be replaced by the domain, which is the URL without `http://` or `https://`.  

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
* [http://andreaslagerkvist.com/jquery/favicons/](http://andreaslagerkvist.com/jquery/favicons/)
* [http://github.com/shuber/jquery-favicons](http://github.com/shuber/jquery-favicons)