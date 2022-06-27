import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Grid } from "@material-ui/core";
import useDetectHeight from "../../utilities/customHooks/useDetectHeight";

const useStyles = makeStyles((theme) => ({}));
const LoadingSpinner = () => {
  const styles = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ height: "100%" }}
    >
      <Grid container item alignItems="center" justifyContent="center">
        <CircularProgress size={60} />
      </Grid>
    </Grid>
  );
};

export default LoadingSpinner;
