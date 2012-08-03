// Example

punycode.ucs2.decode('abc'); // [97, 98, 99]
// surrogate pair for U+1D306 tetragram for centre:
punycode.ucs2.decode('\uD834\uDF06'); // [0x1D306]