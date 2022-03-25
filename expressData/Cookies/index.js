const express = require('express');
const app = express();
const port = 8080;

const cookieParser = require('cookie-parser');
app.use(cookieParser('secret'));

app.get('/', (req, res) => {
	console.log(req.cookies);
	res.send(`eeeyy yoo ${req.cookies.name}`);
});

app.get('/setname', (req, res) => {
	res.cookie('name', 'Jacob');
	res.send('Hello there');
});

app.get('/signedcookie', (req, res) => {
	res.cookie('fruit', 'grape', { signed: true });
	res.send('signed cookie');
});

app.get('/verifyfruit', (req, res) => {
	console.log(req.cookies);
	console.log(req.signedCookies);
	res.send(req.signedCookies);
});

app.listen(port, () => {
	console.log('listening on port ' + port);
});
