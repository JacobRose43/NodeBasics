const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
	if (req.query.isAdmin) {
		next();
	}
	res.send('Sorry Not An Admin');
});

router.get('/', (req, res) => {
	res.send('Login to admin panel');
});

router.get('/panel', (req, res) => {
	res.send('Admin panel');
});

router.get('/Nuke', (req, res) => {
	res.send('Deleting...');
});

module.exports = router;
