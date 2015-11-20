# node-corsair-rgb

Available on npm as `corsair-rgb`

```shell
$ npm install --save corsair-rgb
```

[![](https://badge.fury.io/js/corsair-rgb.svg)](https://www.npmjs.com/package/corsair-rgb)

A really bad API wrapper for LibCorsairRGB that I wrote in 10 minutes.

I really like colors.

And keyboards.

Only works on Windows because fuck it.

## Simple example

This will make your "A" key yellow and all the others white.
Holy fucking shit, right?

```js
var keyboard = require('corsair-rgb');

keyboard.initialize();

keyboard.setKeyColor(keyboard.keymap.all.a, 255, 255, 0);

keyboard.flushLightBuffer();
```

### [Docs](https://github.com/tjhorner/node-corsair-rgb/wiki)
