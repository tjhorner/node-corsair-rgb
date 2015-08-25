var keys = {};

keys.all = {};

keys.all["f1"] = 0x0C;
keys.all["f2"] = 0x18;
keys.all["f3"] = 0x24;
keys.all["f4"] = 0x30;
keys.all["f5"] = 0x3C;
keys.all["f6"] = 0x48;
keys.all["f7"] = 0x54;
keys.all["f8"] = 0x60;
keys.all["f9"] = 0x6C;
keys.all["f10"] = 0x78;
keys.all["f11"] = 0x84;
keys.all["f12"] = 0x06;
keys.all["num0"] = 0x79;
keys.all["num1"] = 0x0D;
keys.all["num2"] = 0x19;
keys.all["num3"] = 0x25;
keys.all["num4"] = 0x31;
keys.all["num5"] = 0x3D;
keys.all["num6"] = 0x49;
keys.all["num7"] = 0x55;
keys.all["num8"] = 0x61;
keys.all["num9"] = 0x6D;
keys.all["minus"] = 0x85;
keys.all["equals"] = 0x07;
keys.all["numpad0"] = 0x81;
keys.all["numpad1"] = 0x5D;
keys.all["numpad2"] = 0x69;
keys.all["numpad3"] = 0x75;
keys.all["numpad4"] = 0x39;
keys.all["numpad5"] = 0x45;
keys.all["numpad7"] = 0x09;
keys.all["numpad6"] = 0x51;
keys.all["numpad8"] = 0x15;
keys.all["numpad9"] = 0x21;
keys.all["numlock"] = 0x50;
keys.all["numpaddivide"] = 0x5C;
keys.all["numpadmultiply"] = 0x68;
keys.all["numpadminus"] = 0x74;
keys.all["numpadplus"] = 0x80;
keys.all["numpadenter"] = 0x8C;
keys.all["numpaddecimal"] = 0x8D;
keys.all["a"] = 0x0F;
keys.all["b"] = 0x4C;
keys.all["c"] = 0x34;
keys.all["d"] = 0x27;
keys.all["e"] = 0x26;
keys.all["f"] = 0x33;
keys.all["g"] = 0x3F;
keys.all["h"] = 0x4B;
keys.all["i"] = 0x62;
keys.all["j"] = 0x57;
keys.all["k"] = 0x63;
keys.all["l"] = 0x6F;
keys.all["m"] = 0x64;
keys.all["n"] = 0x58;
keys.all["o"] = 0x6E;
keys.all["p"] = 0x7A;
keys.all["q"] = 0x0E;
keys.all["r"] = 0x32;
keys.all["s"] = 0x1B;
keys.all["t"] = 0x3E;
keys.all["u"] = 0x56;
keys.all["v"] = 0x40;
keys.all["w"] = 0x1A;
keys.all["x"] = 0x28;
keys.all["y"] = 0x4A;
keys.all["z"] = 0x1C;
keys.all["arrowup"] = 0x67;
keys.all["arrowdown"] = 0x7F;
keys.all["arrowleft"] = 0x73;
keys.all["arrowright"] = 0x8B;
keys.all["mediastop"] = 0x20;
keys.all["mediaprev"] = 0x2C;
keys.all["mediaplaypause"] = 0x38;
keys.all["medianext"] = 0x44;
keys.all["mute"] = 0x14;
keys.all["del"] = 0x2B;
keys.all["insert"] = 0x36;
keys.all["end"] = 0x37;
keys.all["home"] = 0x42;
keys.all["pagedown"] = 0x43;
keys.all["pageup"] = 0x4E;
keys.all["lshift"] = 0x04;
keys.all["rshift"] = 0x4F;
keys.all["lctrl"] = 0x05;
keys.all["rctrl"] = 0x5B;
keys.all["backslash"] = 0x66;
keys.all["forwardslash"] = 0x88;
keys.all["lwinkey"] = 0x11;
keys.all["rwinkey"] = 0x65;
keys.all["alt"] = 0x1D;
keys.all["altgr"] = 0x59;
keys.all["rsquare"] = 0x5A;
keys.all["lsquare"] = 0x86;
keys.all["printscreen"] = 0x12;
keys.all["scolllock"] = 0x1E;
keys.all["pausebreak"] = 0x2A;
keys.all["winlock"] = 0x08;
keys.all["brightness"] = 0x89;
keys.all["comma"] = 0x70;
keys.all["period"] = 0x7C;
keys.all["hash"] = 0x72;
keys.all["semicolon"] = 0x7B;
keys.all["escape"] = 0x0;
keys.all["grave"] = 0x01;
keys.all["tab"] = 0x02;
keys.all["capslock"] = 0x03;
keys.all["backspace"] = 0x1F;
keys.all["enter"] = 0x7E;
keys.all["space"] = 0x35;
keys.all["contextmenu"] = 0x71;
keys.all["apostrophe"] = 0x87;
keys.all["macrorecord"] = 0x0b;
keys.all["macrorecord1"] = 0x17;
keys.all["macrorecord2"] = 0x23;
keys.all["macrorecord3"] = 0x2f;
keys.all["g1"] = 0x0a;
keys.all["g2"] = 0x16;
keys.all["g3"] = 0x22;
keys.all["g4"] = 0x2e;
keys.all["g5"] = 0x3a;
keys.all["g6"] = 0x46;
keys.all["g7"] = 0x52;
keys.all["g8"] = 0x5e;
keys.all["g9"] = 0x6a;
keys.all["g10"] = 0x76;
keys.all["g11"] = 0x3b;
keys.all["g12"] = 0x47;
keys.all["g13"] = 0x53;
keys.all["g14"] = 0x5f;
keys.all["g15"] = 0x6b;
keys.all["g16"] = 0x77;
keys.all["g17"] = 0x83;
keys.all["g18"] = 0x8f;
keys.all["hash"] = 0xFF; // no hash key
keys.all["missing"] = 0xFF;

keys.groups = {};

keys.groups.letters = [
  keys.all.a,
  keys.all.b,
  keys.all.c,
  keys.all.d,
  keys.all.e,
  keys.all.f,
  keys.all.g,
  keys.all.h,
  keys.all.i,
  keys.all.j,
  keys.all.k,
  keys.all.l,
  keys.all.m,
  keys.all.n,
  keys.all.o,
  keys.all.p,
  keys.all.q,
  keys.all.r,
  keys.all.s,
  keys.all.t,
  keys.all.u,
  keys.all.v,
  keys.all.w,
  keys.all.x,
  keys.all.y,
  keys.all.z
];

keys.groups.numbers = [
  keys.all.num1,
  keys.all.num2,
  keys.all.num3,
  keys.all.num4,
  keys.all.num5,
  keys.all.num6,
  keys.all.num7,
  keys.all.num8,
  keys.all.num9,
  keys.all.num0
];

keys.groups.numpad = [
  keys.all.numpad1,
  keys.all.numpad2,
  keys.all.numpad3,
  keys.all.numpad4,
  keys.all.numpad5,
  keys.all.numpad6,
  keys.all.numpad7,
  keys.all.numpad8,
  keys.all.numpad9,
  keys.all.numpad0,
  keys.all.numpaddivide,
  keys.all.numpadmultiply,
  keys.all.numpadminus,
  keys.all.numpadplus,
  keys.all.numpadenter,
  keys.all.numpaddecimal
];

keys.groups.arrows = [
  keys.all.arrowup,
  keys.all.arrowdown,
  keys.all.arrowleft,
  keys.all.arrowright
];

module.exports = keys;
