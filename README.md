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

## Docs

### `initialize()`

Aliases: `initialise()`

**Do this before changing anything else!** Initialize the library and find any keyboards or mice compatible with it. (Mice don't work at the moment)

This will return `0` if it found a keyboard and was initialized successfully.

### `setKeyColor(keycode, r, g, b)`

Set a key color inside of the light buffer.

- `keycode` - An integer representing a key code (get these from `keymap`)
- `r`, `g`, `b` - Standard RGB color format (0-255)

### `flushLightBuffer()`

Send the light buffer to the keyboard. Call this to apply the changes made by `setKeyColor`.

**Note: This is synchronous and takes a couple milliseconds to run, only call it when needed!**

### `keymap`

- `all` - Object containing all the available keys in the US layout
- `groups` - Object containing groups of keys for easy access
  - `numbers` - Top number keys
  - `numpad` - Numpad keys (includes plus, minus, etc.)
  - `letters` - Letter keys
  - `arrows` - Up up down down left right B A start (it's just up, down, left, right arrows)
