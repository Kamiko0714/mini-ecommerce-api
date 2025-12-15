// app.js
const express = require('express');
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Dummy data produk
const products = [
    { id: 1, name: "Laptop", price: 12000 },
    { id: 2, name: "Headset", price: 500 }
];

// Routes
app.get('/products', (req, res) => {
    res.json(products);
});

// Tambahan contoh route GET single product
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});

// 404 handler untuk route yang tidak ditemukan
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
