const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs"); // <<< express behind the scene, require automatic ejs

app.get("/", (req, res) => {
	res.render("index.ejs"); // default /views/<file>
});

app.listen(port, () => {
	console.log(`LISTENING ON PORT ${port}`);
});
