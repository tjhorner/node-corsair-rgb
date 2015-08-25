var ffi = require('ffi'),
    keymaps = require('./lib/keymap'),
    os = require('os');

try{
  var LibCorsairRGB = ffi.Library(__dirname + '/lib/LibCorsairRGB.' + os.arch() + '.dll', {
    'lcrgb_set_keymap': ['int', ['char']],
    'lcrgb_set_verbosity_level': ['void', ['char']],
    'lcrgb_initialise': ['int', []],
    'lcrgb_deinitialise': ['void', []],
    'lcrgb_set_position': ['void', ['int', 'int', 'int', 'int', 'int']],
    'lcrgb_flush_light_buffer': ['int', []],
    'lcrgb_set_key_code': ['void', ['int', 'int', 'int', 'int']]
  });
}catch(e){
  console.error("Error loading LibCorsairRGB! Is your OS architecture not supported? Supported architectures are x64 and ia32.");
  process.exit(1);
}

process.on('exit', function(){
  // make sure keyboard lights are released for other programs
  LibCorsairRGB.lcrgb_deinitialise();
});

function setKeyColor(keys, red, green, blue){
  if(typeof(keys) === "object"){
    for(var index in keys){
      var key = keys[index];
      if(typeof(key) === "number")
        LibCorsairRGB.lcrgb_set_key_code(key, red, green, blue);
    }
  }else{
    LibCorsairRGB.lcrgb_set_key_code(keys, red, green, blue);
  }
};

module.exports = {
  initialize: LibCorsairRGB.lcrgb_initialise,
  initialise: LibCorsairRGB.lcrgb_initialise,
  deinitialize: LibCorsairRGB.lcrgb_deinitialise,
  setKeyColor: setKeyColor,
  setPositionColor: LibCorsairRGB.lcrgb_set_position,
  flushLightBuffer: LibCorsairRGB.lcrgb_flush_light_buffer,
  keymap: keymaps,
  raw: LibCorsairRGB
};
