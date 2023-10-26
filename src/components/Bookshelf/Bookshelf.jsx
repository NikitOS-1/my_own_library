import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Book from "./Book";

const booksData = [
  { title: "Книга 1", author: "Автор 1" },
  { title: "Книга 2", author: "Автор 2" },
  { title: "Книга 3", author: "Автор 3" },
  { title: "Книга 3", author: "Автор 3" },
  { title: "Книга 3", author: "Автор 3" },
  { title: "Книга 3", author: "Автор 3" },
  { title: "Книга 3", author: "Автор 3" },
];

const Bookshelf = () => {
  const [books, setBooks] = useState(booksData);

  return (
    <Container>
      <Grid container spacing={1}>
        {books.map((book) => (
          <Book author={book.author} title={book.title} />
        ))}
      </Grid>
    </Container>
  );
};
export default Bookshelf;
