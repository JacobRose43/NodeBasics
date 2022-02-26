const express = require("express");
const app = express();
const port = 8080;

// app.use((req, res) => {
// 	console.log("WE GOT A NEW REQUEST");
// 	res.send("Welcome!");
// });

app.get("/", (req, res) => {
	res.send("HOME PAGE!");
});

app.get("/r/:query", (req, res) => {
	console.log(req.params);
	res.send("Here is your search!");
});

app.get("/contact", (req, res) => {
	res.send("jacobrose.433@gmail.com");
});

app.listen(port, () => {
	console.log(`LISTENING ON PORT ${port}`);
});

app.get("/search", (req, res) => {
	const { q } = req.query;
	if (!q) {
		res.send("NOTHING FOUND IF NOTHING SEARCHED!");
	}
	res.send(`Search result for: ${q}`);
});

app.get("*", (req, res) => {
	res.send("I dont know that path!");
});

// that have to be on the end, because path "*" belongs to everything
