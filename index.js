const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/tasks/', require('./router'));

const port = 3005;
app.listen(port, () => { console.log(`Server listening on port ${port}`) });
