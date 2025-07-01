const express = require('express');
const app = express();
const booksRoutes = require('./routes/books');

app.use(express.json());
app.use('/books', booksRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('📚 Welcome to the Books API!');
});

// 404 route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});