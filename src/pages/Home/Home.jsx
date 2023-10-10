import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} border={"1px solid black"}>
          <div>xs=12</div>
        </Grid>
        <Grid item xs={8} border={"1px solid black"}>
          <div>xs=8</div>
        </Grid>
        <Grid item xs={4} border={"1px solid black"}>
          <div>xs=4</div>
        </Grid>
        <Grid item xs={2} border={"1px solid black"}>
          <div>xs=2</div>
        </Grid>
        <Grid item xs={10} border={"1px solid black"}>
          <div>xs=10</div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
