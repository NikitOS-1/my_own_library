import { Grid, Paper } from "@mui/material";

const Book = ({ author, title }) => {
  let imageUrl = `url("/static/booksCover/onebook.png")`;

  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        alignItems: "flex-end",
        width: "200px",
        height: "300px",
        margin: "5px",
        backgroundImage: imageUrl,
        backgroundSize: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          height: "15%",
          width: "100%",
          textAlign: "center",
        }}>
        {author}
        <br />
        {title}
      </div>
    </Paper>
  );
};
export default Book;
