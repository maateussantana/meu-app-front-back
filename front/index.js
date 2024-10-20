const http = require("http");
const fs = require("fs");

// Criando o servidor
const server = http.createServer(function (req, res) {
	fs.readFile("./front/index.html", function (error, data) {
		if (error) {
			res.writeHead(404, { "Content-Type": "text/plain" });
			res.end("Error: File not found");
		} else {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		}
	});
});

// Servidor escutando na porta 5000
server.listen(5000, () => {
	console.log("Server on");
});
