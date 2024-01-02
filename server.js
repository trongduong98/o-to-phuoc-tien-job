const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/o_to_phuoc_tien_job'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/o_to_phuoc_tien_job/index.html'));
});

app.listen(process.env.PORT || 8080);