const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

app.listen(process.env.PORT || 8080);
console.log(`Server started on port ${process.env.PORT || 8080}`);
