require('dotenv').config();
const express = require('express');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');

const audience = process.env.AUDIENCE;
const issuerBaseURL = process.env.ISSUER_BASE_URL;
const port = process.env.PORT || 3000;

const jwtCheck = auth({
  audience,
  issuerBaseURL,
  tokenSigningAlg: 'RS256'
});

// enforce on all endpoints
app.use(jwtCheck);

app.get('/countries', function (req, res) {
    res.json([
        { name: 'Argentina', code: 'AR' },
        { name: 'Brazil', code: 'BR' },
        { name: 'Canada', code: 'CA' },
        { name: 'Mexico', code: 'MX' }
    ]);
});

app.listen(port);

console.log('Running on port ', port);