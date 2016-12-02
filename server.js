var app = require("./app");

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Listening on http://%s::%s", host, port);
});