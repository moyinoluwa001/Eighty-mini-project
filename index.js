// const express = require('express');
// const app = express();
// const booksRoutes = require('./routes/books');

// app.use(express.json());

// app.use('/books', booksRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on port ${PORT}`);
// });


const express = require('express');
const app = express();
const booksRoutes = require('./routes/books');

app.use(express.json());

// Mounting routes
app.use('/books', booksRoutes); // So /books will trigger your router

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
