import React from "react";
import Header from "./framework/Header";
import Footer from "./framework/Footer";

import ConnectApi from "../api/ConnectApi";

import { Box, Button, Card, CardActions, CardContent, CardHeader,Container, CssBaseline, Grid, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    "@global": {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
    },
    // appBar: {
    //   borderBottom: `1px solid ${theme.palette.divider}`,
    // },
    toolbar: {
      flexWrap: "wrap",
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    // link: {
    //   margin: theme.spacing(1, 1.5),
    // },
    // heroContent: {
    //   padding: theme.spacing(8, 0, 6),
    // },
    // cardHeader: {
    //   backgroundColor:
    //     // theme.palette.type === "light"
    //       ? theme.palette.grey[200]
    //       : theme.palette.grey[700],
    // },
    cardPricing: {
      display: "flex",
      justifyContent: "center",
      alignItems: "baseline",
    //   marginBottom: theme.spacing(2),
    },
  }));


export const QuizSelect = () => {

const classes = useStyles();

const API_URL = "http://127.0.0.1:8080/quiz/";
const [dataState] = ConnectApi(API_URL);
    
console.log(dataState)
    return(
        <React.Fragment>
        <Header/>

        <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Quizzes
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          We've got all the quizzes you love to binge! The world's largest
          selection of quizzes. Choose from 1+ quizzes with new additions
          published every month
        </Typography>
      </Container>



        <Container maxWidth="lg" component="main">

            <Grid container spacing={5} alignItems="flex-end">
                {dataState.data.map((q) => (
                    <Grid item key={q.title} xs={12} md={4}>
                    <Card>
                        <CardHeader
                        title={q.title}
                        titleTypegraphyProps={{ align:"center"}}
                        subheaderTypographyProps={{ align: "center"}}
                        className={classes.CardHeader}
                        />
                        <CardContent>
                            <div className={classes.cardPricing}>
                                <Typography component="h2" varient="h6" color= "textPrimary">
                                    Random Quiz
                                </Typography>
                                </div>
                                <ul>
                                    <Typography
                                    component="li"
                                    varient="subtitle1"
                                    align="center">
                                        50 Questions
                                    </Typography>
                                </ul>
                        </CardContent>
                        <CardActions>
                            <Button
                            fullWidth
                            varient="outlined"
                            color="primary"
                            href="http://localhost:3000/r/django">
                                Start Quiz
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                ))}

            </Grid>
        </Container>
        

        <Footer/>
        
        </React.Fragment>
    )
}

export default QuizSelect