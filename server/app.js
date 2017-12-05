const express = require('express');
const path = require('path');
const app = express();

console.log(path.join(__dirname, '../', '/client'));

app.use('/client', express.static(path.join(__dirname, '../', '/client')));
app.use('/bootstrap', express.static(path.join(__dirname, '../', '/bootstrap')));

app.route('/*')
    .get((req, res) => {
      res.sendFile(path.join(__dirname, '../', 'index.html'));
    });

var server_port = process.env.PORT || 9000

app.set('port', server_port);

var server = app.listen(server_port, function () {
    console.log('Express server listening on ' + server.address().address + ' port ' + server.address().port);
});
