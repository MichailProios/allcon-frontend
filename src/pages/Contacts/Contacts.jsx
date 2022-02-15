import React, { useState } from "react";
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
import Marker from "google-map-react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import RoomIcon from "@material-ui/icons/Room";
import Popover from "@material-ui/core/Popover";
import axios from "axios";
import MuiPhoneNumber from "material-ui-phone-number";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { isMobile } from "react-device-detect";

import { Grid, Grow, Slide, Divider, Tooltip } from "@material-ui/core";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";
import { useTheme } from "@material-ui/styles";

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

  map: { borderRadius: "20px" },
  mapPaper: {
    maxWidth: "100%",
    height: "100vh",
  },

  card: {
    maxWidth: "100%",
    height: "100vh",
  },

  textPrimary: {
    userSelect: "none",
    useDrag: "none",
  },
  textSecondary: {
    userSelect: "none",
    useDrag: "none",
  },

  links: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    userDrag: "none",
    userSelect: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  mapMarker: {
    position: "absolute",
    width: 50,
    height: 50,
    left: -50 / 2,
    top: -50 / 2,

    transition: "transform 0.10s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.1, 1.1, 1)",
      cursor: "pointer",
    },
    color: "#de5246",
  },
  tooltipStyle: {
    zIndex: 50,
  },
}));

function getSteps() {
  return [
    "Name",
    "Contact Information",
    "Address",
    "Business Information",
    "Inquiry",
  ];
}

function getStepContent(
  step,
  styles,
  firstNameError,
  filterFirstName,
  lastNameError,
  filterLastName,
  emailError,
  filterEmail,
  phoneNumberError,
  filterPhoneNumber
) {
  switch (step) {
    case 0:
      return (
        <Grid container spacing={1} direction="column">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>Enter your first and last name:</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <TextField
              label="First Name"
              variant="standard"
              fullWidth={true}
              onChange={filterFirstName}
              error={firstNameError}
              required={true}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <TextField
              label="Last Name"
              variant="standard"
              fullWidth={true}
              onChange={filterLastName}
              error={lastNameError}
              required={true}
            />
          </Grid>
        </Grid>
      );
    case 1:
      return (
        <Grid container spacing={1} direction="column">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>Enter your contact information:</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <TextField
              label="Email"
              fullWidth={true}
              variant="standard"
              onChange={filterEmail}
              error={emailError}
              required={true}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <MuiPhoneNumber
              defaultCountry={"us"}
              onlyCountries={["us"]}
              fullWidth={true}
              label="Phone Number"
              color="primary"
              variant="standard"
              onChange={filterPhoneNumber}
              error={phoneNumberError}
              required={true}
            />
          </Grid>
        </Grid>
      );
    case 2:
      return (
        <Grid container spacing={1} direction="column">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>Enter your address (optional):</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <TextField
              fullWidth={true}
              label="Address Line"
              variant="standard"
              required={false}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <TextField
              fullWidth={true}
              label="City"
              variant="standard"
              required={false}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <TextField
              fullWidth={true}
              label="Zip / Postal Code"
              variant="standard"
              required={false}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <TextField
              fullWidth={true}
              label="State"
              variant="standard"
              required={false}
            />
          </Grid>
        </Grid>
      );
    case 3:
      return (
        <Grid container spacing={1} direction="column">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>Enter any business information (optional):</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <TextField
              fullWidth={true}
              label="Name"
              variant="standard"
              required={false}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <TextField
              fullWidth={true}
              label="Email"
              variant="standard"
              required={false}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <MuiPhoneNumber
              defaultCountry={"us"}
              onlyCountries={["us"]}
              fullWidth={true}
              label="Phone Number"
              color="primary"
              variant="standard"
              onChange={filterPhoneNumber}
              error={phoneNumberError}
              required={true}
            />
          </Grid>
        </Grid>
      );
    case 4:
      return (
        <Grid container spacing={1} direction="column">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>Type your inquiry:</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              fullWidth={true}
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
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const [disableNext, setDisableNext] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const filterFirstName = (e) => {
    if (!e.target.value.match(/^[a-z ,.'-]+$/i) && e.target.value !== "") {
      setFirstNameError(true);
      setFirstName("");
    } else if (e.target.value === "") {
      setFirstNameError(false);
      setFirstName("");
    } else {
      setFirstNameError(false);
      setFirstName(e.target.value.toLowerCase());
    }
  };

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);

  const filterLastName = (e) => {
    if (!e.target.value.match(/^[a-z ,.'-]+$/i) && e.target.value !== "") {
      setLastNameError(true);
      setLastName("");
    } else if (e.target.value === "") {
      setLastNameError(false);
      setLastName("");
    } else {
      setLastNameError(false);
      setLastName(e.target.value.toLowerCase());
    }
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const filterEmail = (e) => {
    if (!e.target.value.match(/^[a-z ,.'-]+$/i) && e.target.value !== "") {
      setEmailError(true);
      setDisableNext(true);
      setEmail("");
    } else if (e.target.value === "") {
      setEmailError(false);
      setDisableNext(true);
      setEmail("");
    } else {
      setEmailError(false);
      setDisableNext(false);
      setEmail(e.target.value.toLowerCase());
    }
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  console.log(phoneNumber.length);

  const filterPhoneNumber = (e) => {
    setPhoneNumber(e);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickWestbury = () => {
    window.open(
      "https://www.google.com/maps/place/66+Brooklyn+Ave,+Westbury,+NY+11590/@40.7566889,-73.5613715,17z/data=!3m1!4b1!4m5!3m4!1s0x89c280cb33822bf3:0x68442c7cd931282c!8m2!3d40.7566849!4d-73.5591828"
    );
  };

  const handleClickWoodbridge = () => {
    window.open(
      "https://www.google.com/maps/place/300+Kimball+St+%23204b,+Woodbridge,+NJ+07095/@40.5704583,-74.2927654,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3b43787c7a943:0x65a7ff4b9f5b4c13!8m2!3d40.5704542!4d-74.2905767"
    );
  };

  const center = {
    lat: 40.69802902554617,
    lng: -73.87054320174943,
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
          <Typography color="primary" variant="h4">
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
                <StepContent TransitionProps={{ unmountOnExit: false }}>
                  <div>
                    {getStepContent(
                      index,
                      styles,
                      firstNameError,
                      filterFirstName,
                      lastNameError,
                      filterLastName,
                      emailError,
                      filterEmail,
                      phoneNumberError,
                      filterPhoneNumber
                    )}
                  </div>
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
                        disabled={disableNext}
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
              // defaultCenter={center}
              center={center}
              zoom={matchesMD ? 8 : 9}
              // defaultZoom={matchesMD ? 8 : 9}
              options={{
                panControl: false,
                zoomControl: false,
                rotateControl: false,
                scaleControl: false,
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                scrollwheel: false,
                gestureHandling: "none",
                mapTypeId: "roadmap",
              }}
              className={styles.map}
            >
              {isMobile ? (
                <Tooltip
                  title="Westbury Office"
                  open={true}
                  arrow={true}
                  placement="bottom"
                  enterDelay={150}
                  leaveDelay={0}
                  lat={40.75677833945324}
                  lng={-73.55917207324349}
                >
                  <RoomIcon
                    onClick={handleClickWestbury}
                    className={styles.mapMarker}
                  />
                </Tooltip>
              ) : (
                <Tooltip
                  title="Westbury Office"
                  arrow={true}
                  placement="bottom"
                  enterDelay={150}
                  leaveDelay={0}
                  lat={40.75677833945324}
                  lng={-73.55917207324349}
                >
                  <RoomIcon
                    onClick={handleClickWestbury}
                    className={styles.mapMarker}
                  />
                </Tooltip>
              )}
              {isMobile ? (
                <Tooltip
                  title="Woodbridge Office"
                  open={true}
                  arrow={true}
                  placement="bottom"
                  enterDelay={150}
                  leaveDelay={0}
                  lat={40.57076413473068}
                  lng={-74.29056081340242}
                >
                  <RoomIcon
                    onClick={handleClickWoodbridge}
                    className={styles.mapMarker}
                  />
                </Tooltip>
              ) : (
                <Tooltip
                  title="Woodbridge Office"
                  arrow={true}
                  placement="bottom"
                  enterDelay={150}
                  leaveDelay={0}
                  lat={40.57076413473068}
                  lng={-74.29056081340242}
                >
                  <RoomIcon
                    onClick={handleClickWoodbridge}
                    className={styles.mapMarker}
                  />
                </Tooltip>
              )}

              {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
              {/* <Marker position={{ lat: -34.397, lng: 150.644 }} /> */}
            </GoogleMapReact>
          </Paper>
        </Grid>
      </Grow>
      <Grow in={useDelayTransition(1000)} timeout={800}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={2}>
          <Card className={styles.card}>
            <CardHeader
              title="General Information"
              className={styles.cardHeader}
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="h6" className={styles.textPrimary}>
                    Main Office Address
                  </Typography>
                  <Typography variant="body1" className={styles.textSecondary}>
                    <Tooltip title="Click to View our Main Office Address">
                      <a
                        className={styles.links}
                        href="https://www.google.com/maps/place/66+Brooklyn+Ave,+Westbury,+NY+11590/@40.7566889,-73.5613715,17z/data=!3m1!4b1!4m5!3m4!1s0x89c280cb33822bf3:0x68442c7cd931282c!8m2!3d40.7566849!4d-73.5591828"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        66 Brooklyn Avenue, Westbury, New York, 11590
                      </a>
                    </Tooltip>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="h6" className={styles.textPrimary}>
                    New Jersey Office Address
                  </Typography>
                  <Typography variant="body1" className={styles.textSecondary}>
                    <Tooltip title="Click to View our New Jersey Office Address">
                      <a
                        className={styles.links}
                        href="https://www.google.com/maps/place/300+Kimball+St+%23204b,+Woodbridge,+NJ+07095/@40.5704583,-74.2927654,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3b43787c7a943:0x65a7ff4b9f5b4c13!8m2!3d40.5704542!4d-74.2905767"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        300 Kimball St, Suite 204B, Woodbridge, New Jersey,
                        07095
                      </a>
                    </Tooltip>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="h6" className={styles.textPrimary}>
                    LinkedIn
                  </Typography>
                  <Typography variant="body1" className={styles.textSecondary}>
                    <Tooltip title="Click to View our LinkedIn">
                      <a
                        className={styles.links}
                        href="https://www.linkedin.com/company/allcon-contracting"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.linkedin.com/company/{matchesXL && <br />}
                        allcon-contracting
                      </a>
                    </Tooltip>
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="h6" className={styles.textPrimary}>
                    Email Address
                  </Typography>
                  <Typography variant="body1" className={styles.textSecondary}>
                    <Tooltip title="Click to Email">
                      <a
                        className={styles.links}
                        href="mailto:info@allconcontracting.com"
                      >
                        info@allconcontracting.com
                      </a>
                    </Tooltip>
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="h6" className={styles.textPrimary}>
                    Phone Number
                  </Typography>
                  <Typography variant="body1" className={styles.textSecondary}>
                    <Tooltip title="Click to Call">
                      <a className={styles.links} href="tel:+1 516-333-3339">
                        +1-516-333-3339
                      </a>
                    </Tooltip>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="h6" className={styles.textPrimary}>
                    Fax Number
                  </Typography>
                  <Typography
                    variant="body1"
                    className={styles.textSecondary}
                    style={{ color: "#008B8B", userSelect: "all" }}
                  >
                    <Tooltip title="Click to Highlight">
                      <span style={{ width: "auto" }}>+1-516-333-3344</span>
                    </Tooltip>
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
