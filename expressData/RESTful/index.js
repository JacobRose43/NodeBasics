const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const { v4: uId } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
	{
		id: uId(),
		username: "Todd",
		comment: "Lol first comment!",
	},
	{
		id: uId(),
		username: "Jessy",
		comment: "Lol second comment!",
	},
	{
		id: uId(),
		username: "Mike",
		comment: "Lol third comment!",
	},
	{
		id: uId(),
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
	comments.push({ username, comment, id: uId() });
	res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
	const { id } = req.params;
	const comment = comments.find((c) => c.id === id);
	res.render("comments/show", { comment });
});

app.patch("/comments/:id", (req, res) => {
	const { id } = req.params;
	const comment = comments.find((c) => c.id === id);
	res.send("Updating...");
});

app.post("/dinner", (req, res) => {
	const { meat, qty } = req.body;
	res.send(`Your ${qty} ${meat}`);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
