const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
	{
		username: "Todd",
		comment: "Lol first comment!",
	},
	{
		username: "Jessy",
		comment: "Lol second comment!",
	},
	{
		username: "Mike",
		comment: "Lol third comment!",
	},
	{
		username: "Alice",
		comment: "Lol fourth comment!",
	},
];

app.get("/comments", (req, res) => {
	res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
	res.render("comments/new");
});

app.get("/dinner", (req, res) => {
	res.send("GET/dinner resposne");
});

app.post("/comments", (req, res) => {
	const { username, comment } = req.body;
	comments.push({ username, comment });
	res.send("Done!");
});

app.post("/dinner", (req, res) => {
	const { meat, qty } = req.body;
	res.send(`Your ${qty} ${meat}`);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
