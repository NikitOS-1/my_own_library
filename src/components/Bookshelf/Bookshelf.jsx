import { Container, Grid } from "@mui/material";
import React, { useState } from "react";

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
    <div>
      Bookshelf
      <Container>
        <Grid container spacing={1}>
          {books.map((book, index) => (
            <Grid item key={index} xs={1}>
              <div
                style={{
                  border: "1px solid black",
                  width: "40px",
                  height: "150px",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  whiteSpace: "nowrap",
                  fontSize: "1.2em",
                  textAlign: "center",
                  margin: "0 auto",
                }}>
                {book.title}
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default Bookshelf;
