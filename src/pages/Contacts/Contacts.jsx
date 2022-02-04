import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import GoogleMapReact from "google-map-react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { Grid, Grow, Slide, Divider } from "@material-ui/core";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";

const useStyles = makeStyles((theme) => ({
  contactUsGridContainer: {
    padding: "2em 10em 2em 10em",

    [theme.breakpoints.down("lg")]: {
      padding: "2em 8em 2em 8em",
    },

    [theme.breakpoints.down("md")]: {
      padding: "2em 4em 2em 4em",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "2em 1em 2em 1em",
    },

    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
    backgroundColor: "#fff",
  },
  stepper: {
    backgroundColor: "#fff",
    borderRadius: "6px",
  },

  mapPaper: {
    maxWidth: "100%",
    height: "100vh",
  },

  card: {
    maxWidth: "100%",
    height: "100vh",
  },
}));

function getSteps() {
  return [
    "Name",
    "Contact Information",
    "Address",
    "Company Information",
    "Inquiry",
  ];
}

function getStepContent(step, styles) {
  switch (step) {
    case 0:
      return (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>Enter your first and last name:</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField label="First Name" variant="standard" required={true} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField label="Last Name" variant="standard" required={true} />
          </Grid>
        </Grid>
      );
    case 1:
      return (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>Enter your contact information:</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField label="Email" variant="standard" required={true} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              label="Phone Number"
              variant="standard"
              required={true}
            />
          </Grid>
        </Grid>
      );
    case 2:
      return (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>Enter your address:</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              label="Address Line"
              variant="standard"
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField label="City" variant="standard" required={true} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              label="Zip / Postal Code"
              variant="standard"
              required={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField label="State" variant="standard" required={true} />
          </Grid>
        </Grid>
      );
    case 3:
      return (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>Fill the company name:</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField label="First Name" variant="standard" required={true} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField label="Last Name" variant="standard" required={true} />
          </Grid>
        </Grid>
      );
    case 4:
      return (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>Type your inquiry:</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              style={{ width: "100%" }}
              multiline={true}
              minRows={6}
              label="Message"
              variant="standard"
              required={true}
            />
          </Grid>
        </Grid>
      );
    default:
      return "Unknown step";
  }
}

const Contacts = () => {
  const styles = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const center = {
    lat: 40.756823037731245,
    lng: -73.55916134438887,
  };

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      className={styles.contactUsGridContainer}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={styles.header}
      >
        <Grow in={useDelayTransition(50)} timeout={800}>
          <Typography color="textPrimary" variant="h4">
            Contact Us
          </Typography>
        </Grow>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={styles.header}
      >
        <Grow in={useDelayTransition(200)} timeout={800}>
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            className={styles.stepper}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <div>{getStepContent(index, styles)}</div>
                  <div className={styles.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={styles.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={styles.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Grow>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={styles.resetContainer}>
            <Typography>
              Your email is sent, thank you for contacting ALL•CON Contracting
            </Typography>
            <Button onClick={handleReset} className={styles.button}>
              Reset
            </Button>
          </Paper>
        )}
      </Grid>
      <Grow in={useDelayTransition(500)} timeout={800}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={10}>
          <Paper className={styles.mapPaper}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBu03kEKAEtz-cNwAyJMoNHkjYHfJPFWUU",
              }}
              defaultCenter={center}
              defaultZoom={18}
            >
              {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
            </GoogleMapReact>
          </Paper>
        </Grid>
      </Grow>

      <Grow in={useDelayTransition(1000)} timeout={800}>
        <Grid item xs={12} sm={12} md={2} lg={12} xl={2}>
          <Card className={styles.card}>
            <CardHeader
              title=" Office Information"
              className={styles.cardHeader}
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="h6" className={styles.textPrimary}>
                    Office Information
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grow>
    </Grid>
  );
};

export default Contacts;
