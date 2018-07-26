// Require/import the HTTP module
var http = require("http");

// Define ports
var PORT1 = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function somethingGood(request, response) {

    // Send the string to the client when the user visits the PORT URL
    response.end("Something Good About Yourself!" + request.url);
}

function somethingBad(request, response){

    response.end("Something Bad About Yourself!" + request.url);
}

var server = http.createServer(somethingGood);

server.listen(PORT1, function() {

    console.log("Server listening on: http://localhost:" + PORT1);
});

var server = http.createServer(somethingBad);

server.listen(PORT2, function() {

    console.log("Server listening on: http://localhost:" + PORT2);
});