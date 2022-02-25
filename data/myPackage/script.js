const figlet = require("figlet");
const colors = require("colors");

let text = "U've been hacked";

figlet(text, function (err, data) {
	if (err) {
		console.log("Something went wrong....");
		console.dir(err);
		return;
	}
	console.log(data.bgWhite.black.bold);
	console.log(data.rainbow);
	console.log(data.america);
	console.log(data.zebra);
});
