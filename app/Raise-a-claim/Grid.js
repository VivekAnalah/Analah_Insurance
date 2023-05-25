"use client";
import { Grid } from "@mui/material";
export default function Grid_Components({ children }) {
  console.log("client side");

  return (
    <>
      <Grid container>
        <Grid
          item
          md={4}
          lg={4}
          className={"w-[100%] flex justify-center px-3"}
        >
          {children[0]}
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          className={"w-[100%] flex justify-center px-3"}
        >
          {children[1]}
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          className={"w-[100%] flex justify-center px-3"}
        >
          {children[2]}
        </Grid>
      </Grid>
    </>
  );
}
