const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
// ^^^ express behind the scene, require automatic ejs

app.get("/", (req, res) => {
	res.render("home.ejs"); // default /views/<file>
});

app.listen(port, () => {
	console.log(`LISTENING ON PORT ${port}`);
});
