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

const Home = () => {
  const [books, setBooks] = useState(booksData);

  return (
    <Container>
      <Grid container spacing={2}>
        {books.map((book, index) => (
          <Grid item key={index} xs={4}></Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
