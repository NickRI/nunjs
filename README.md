# nunjs

Nunjucks wrapper, adds Jinja2 engine for __Sails/Express__ in a simplest way.

[Sails](http://sailsjs.org/) is great! But it's absolutly unconfigurable. There are only two template engines to choose - `ejs` and `jade`. I hate them both. Jinja is simplier and better for me. I'm sure you are lazy like me and prefer to use powerful modules ready-to-use, without _voodoo_ practices.

## Important!
_This module is a patch for sails.js version 0.9.4 and earlier. For newest versions, you can fully use __[consolidate](https://github.com/visionmedia/consolidate.js)__d nunjucks module_

## Install

#### Basic
	$ npm install nunjs 
	
#### From GitHub
	$ npm install git://github.com/rootStar-lock/nunjs.git

## Usage
It is simple, very simple. Just install and config your app.

### Express

Add/change your __app.js__ file like:

```js
app.set('views', __dirname + '/views');
app.set('view engine', 'nunjs');
app.use(express.favicon());
```

### Sails

Change your `engine` option in __config/views.js__ to `nunjs`

```js
module.exports.views = {
	engine: 'nunjs',
	layout: true //Ingnored. Use extends command http://jinja.pocoo.org/docs/templates/#template-inheritance
}
```

## Next ?

After that add your `.nunjs` templates in your views folder.

#### Additional links
-	[nunjucks](http://nunjucks.jlongster.com/)
- [Jinja 2](http://jinja.pocoo.org/)

#### Contacts

- Email: deneb808@gmail.com


_My own luna park with nuns and chess :) Enjoy_

