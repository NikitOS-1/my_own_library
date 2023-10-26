import { Grid } from "@mui/material";
import Bookshelf from "components/Bookshelf/Bookshelf";
import Quote from "components/Quote/Quote";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <Quote />
      <Bookshelf />;
    </div>
  );
};

export default Home;
