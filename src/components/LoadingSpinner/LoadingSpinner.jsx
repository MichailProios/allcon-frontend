import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Grid } from "@material-ui/core";
import useDetectHeight from "../../utilities/customHooks/useDetectHeight";

const useStyles = makeStyles((theme) => ({}));
const LoadingSpinner = () => {
  const styles = useStyles();

  const height = useDetectHeight();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: `calc(${height}px - 65px)` }}
    >
      <Grid item xs={3}>
        <CircularProgress size={60} />
      </Grid>
    </Grid>
  );
};

export default LoadingSpinner;
