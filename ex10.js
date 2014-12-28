var net = require('net');

function zeroFill(n) {return (n < 10 ? '0' : '' ) + n}

function now() {
	d = new Date();
	return d.getFullYear() + '-'
		+ zeroFill(d.getMonth() + 1) + '-'
		+ zeroFill(d.getDate()) + ' '
		+ zeroFill(d.getHours()) + ":"
		+ zeroFill(d.getMinutes())
}
	

	var server = net.createServer(function (socket) {
	socket.end(now() + "\n")
})

server.listen(Number(process.argv[2]))
