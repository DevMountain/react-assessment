const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const basicURL = 'https://practiceapi.devmountain.com';

const PORT = 3015;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));