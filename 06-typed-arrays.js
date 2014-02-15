process.stdin.on('data', function(buff) {
	var array = new Uint8Array(buff);
	console.log(JSON.stringify(array));
});