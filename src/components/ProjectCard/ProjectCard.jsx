import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import { Grow } from "@material-ui/core";

import { CardHeader, Paper } from "@material-ui/core";
import useDelayTransition from "../../utilities/customHooks/useDelayTransition.jsx";

const useStyles = makeStyles({
  root: {
    width: "auto",
    height: "30em",
  },
  media: {},
});
function ProjectCard({ title, image, link, index }) {
  const styles = useStyles();
  return (
    // <Card className={styles.root}>
    //   <CardActionArea>
    //     <Image
    //       className={styles.media}
    //       imageStyle={{ height: "30em" }}
    //       src={image}
    //       animationDuration={100}
    //       cover={true}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {title}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    <Grow in={useDelayTransition(100 * index)} timeout={800}>
      <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
        <Card className={styles.root}>
          <CardActionArea>
            <Image
              imageStyle={{}}
              src={image}
              cover={true}
              animationDuration={100}
            />
            {/* <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography> */}
          </CardActionArea>
        </Card>
      </Grid>
    </Grow>
  );
}

export default ProjectCard;
