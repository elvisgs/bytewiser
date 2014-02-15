var fs = require('fs');
var split = require('split');

fs.createReadStream(process.argv[2])
	.pipe(split()).on('data', function(line) {
		console.log(new Buffer(line));
	});