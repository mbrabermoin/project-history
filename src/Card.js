import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    height: 500,
    float: 'left',
    marginLeft: 20,
    marginBottom: 20,
  },
  button:{
    color: grey[900],
    textTransform: 'none',
  },
  dsiImg:{
    width:140,
    height:100,
    margin: "auto",
  },
  title:{
    fontWeight: "bold",
    marginBottom: 10,
  },
  text:{
    fontSize: 18,
    color: grey[800],
    justifyContent: "center",
    height: 280,
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia className={classes.dsiImg}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://media.bizj.us/view/img/11827609/dsi-4c-pos*1200xx2066-1162-94-0.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            Cloud Inventory
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p" className={classes.text}>
            Status: In Progress
            <br></br><br></br>
            Dates: 03/10/2016 - Current
            <br></br><br></br>
            Internal Team: Cloud Inventory Team
            <br></br><br></br>
            El proyecto constó de 3 aplicaciones desarrolladas en Wire y 2 en Forms
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.button}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
