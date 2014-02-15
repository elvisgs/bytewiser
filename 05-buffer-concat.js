var Transform = require('stream').Transform;
var util = require('util');

function Concat() {
	Transform.call(this);
}

util.inherits(Concat, Transform);

Concat.prototype._transform = function(chunk, encoding, callback) {
	this.bigBuffer = this.bigBuffer || new Buffer(0);
	this.bigBuffer = Buffer.concat([this.bigBuffer, chunk]);
	callback();
};

Concat.prototype._flush = function(callback) {
	console.log(this.bigBuffer);
	callback();
};


process.stdin.pipe(new Concat());