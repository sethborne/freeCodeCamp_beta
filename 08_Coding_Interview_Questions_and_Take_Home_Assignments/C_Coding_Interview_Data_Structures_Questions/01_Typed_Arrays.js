var buffer = new ArrayBuffer(64);
console.log(buffer.byteLength);
var i32View = new Int32Array(buffer);
console.log(i32View);
