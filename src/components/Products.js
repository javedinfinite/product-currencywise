import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PhoneIcon from "@material-ui/icons/Phone";
import data from "./SampleProducts";
import CurrencyMenu from "./CurrencyMenu";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Products() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("INR");
  const [exchangerate, setExchangerate] = React.useState(1);

  const onChangeCurrency = (c_type, ex_rate) => {
    //   console.log("value........", value)
    setCurrency(c_type);
    setExchangerate(ex_rate);
  };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <CurrencyMenu onChangeCurrency={onChangeCurrency} />
      {/* {JSON.stringify(data)} */}
      <Grid container spacing={4}>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={product.filename}
                title={product.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Typography>{product.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  {currency == "INR"
                    ? "₹" + product.price
                    : "$" + (product.price * exchangerate).toFixed(3)}
                </Button>
                <Button size="small" color="primary">
                  <PhoneIcon style={{ fontSize: 12 }} /> 1234567890
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
