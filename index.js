const express = require('express');
const app = express();

let version='v1.0.0 Production';

app.get('/', (req, res) => res.send('Hello World! ' + version));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
