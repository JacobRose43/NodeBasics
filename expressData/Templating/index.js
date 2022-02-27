const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs"); // <<< express behind the scene, require automatic ejs
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
	res.render("home.ejs"); // default /views/<file>
});

app.listen(port, () => {
	console.log(`LISTENING ON PORT ${port}`);
});
