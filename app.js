const express = require('express');
const app = express();

app.get('/products', (req, res) => {
	res.json([
		{ id: 1, name: "Laptop", price: 12000 },
		{ id: 2, name: "Headset", price: 500  }
	]);
});

app.listen(3000, () => {
	console.log("API running on port 3000")
});
