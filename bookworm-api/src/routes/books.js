import express from 'express';

const router = express.Router();

router.get('/search', (req, res) => {
  res.json({
    books: [
      {
        goodReadsId: 1,
        title: "1984",
        authors: "Orwell",
        covers: ["", ""],
        pages: 198
      },
      {
        goodReadsId: 2,
        title: "Three Men in a Boat",
        authors: "Jerome K. Jerome",
        covers: ["", ""],
        pages: 256
      }
    ]
  })
});

export default router;
