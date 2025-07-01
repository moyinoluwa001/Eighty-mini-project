const express = require('express');
const router = express.Router();

let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 4, title: 'Things Fall Apart', author: 'Chinua Achebe' },
  { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen' },
  { id: 6, title: 'Sapiens', author: 'Yuval Noah Harari' },
  { id: 7, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 8, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki' },
  { id: 9, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: 10, title: 'Half of a Yellow Sun', author: 'Chimamanda Ngozi Adichie' }
];

// GET all books
router.get('/', (req, res) => {
  res.status(200).json(books);
});

// GET one book by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book);
});

// CREATE a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required' });
  }
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// UPDATE a book
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;

  res.status(200).json(book);
});

// DELETE a book
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  books.splice(index, 1);
  res.status(200).json({ message: 'Book deleted successfully' });
});

module.exports = router;
