# jQuery Favicons Plug-in

Add favicons to anchor elements on your page.

Feel free to check out the [examples](http://christianv.github.com/jquery-favicons/example.html).

![Preview of the plug-in](http://f.cl.ly/items/0Y3K3v1D3W2k0F412v0O/Screen%20shot%202011-04-29%20at%2015.32.16.png)

## Requirements
* [jQuery 1.3+](http://www.jquery.com)

## Usage

```html
<script src="https://cdn.rawgit.com/christianv/jquery-favicons/gh-pages/jquery.favicons.min.js"></script>
<script>
  $('a[href^="http://"]').favicons();
</script>
```

You can download the [complete](https://raw.githubusercontent.com/christianv/jquery-favicons/gh-pages/jquery.favicons.js) or [minified](https://raw.githubusercontent.com/christianv/jquery-favicons/gh-pages/jquery.favicons.min.js) version of the script locally.
You're also able to change the jQuery selector `a[href^="http://"]` to whatever you want.


## Configuration

The plug-in accepts 1 argument, which is the config object.

```javascript
$('a').favicons({
  'classname': 'sakai-favicon',
  'service': 'http://g.etfv.co/__URL__?defaulticon=http://www.google.com/favicon.ico'
});
```

* `classname`: Name of the CSS class (default: "favicon")

* `service`: URL of the service you want to use. (default: "http://g.etfv.co/\_\_URL\_\_")
  * `__URL__` will be replaced by the complete URL.
  * `__DOMAIN__` will be replaced by the domain, which is the URL without `http://` or `https://`.

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

## Sites
Sites using this plug-in.
Feel free to fork the project and send a pull request to add your site in here.

* [Christian Vuerings](http://denbuzze.com)

## Inspiration
* [http://andreaslagerkvist.com/jquery/favicons/](http://andreaslagerkvist.com/jquery/favicons/)
* [http://github.com/shuber/jquery-favicons](http://github.com/shuber/jquery-favicons)
