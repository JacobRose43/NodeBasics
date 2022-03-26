const express = require('express');
const app = express();
const port = 8080;
const session = require('express-session');

const sessionOptions = { secret: 'secret', resave: false, saveUninitialized: false };
app.use(session(sessionOptions));

app.get('/viewcount', (req, res) => {
	if (req.session.count) {
		req.session.count += 1;
	} else {
		req.session.count = 1;
	}
	res.send(`You have viewed this page ${req.session.count} times`);
});

app.get('/register', (req, res) => {
	const { userName = 'Anonymous' } = req.query;
	req.session.username = userName;
	res.redirect('/greet');
});

app.get('/greet', (req, res) => {
	const { userName } = req.session;
	res.send(`Hello ${userName}`);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
