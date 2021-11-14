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

import { CardHeader, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "auto",
    height: "30em",
  },
  media: {},
});
function ProjectCard({ title, image, link }) {
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
    <Card className={styles.root}>
      <CardActionArea>
        <Image imageStyle={{}} cover={true} animationDuration={100} />
        {/* <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography> */}
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
