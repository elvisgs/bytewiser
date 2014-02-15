var through = require('through');

process.stdin.pipe(new through(function(buf) {
	for (var i = 0, l = buf.length; i < l; i++) {
		if (buf[i] === '.'.charCodeAt(0))
			buf.write('!', i, 1);
	}

	console.log(buf);
}));