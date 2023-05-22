import React, {useEffect, useState} from "react";

import { useParams } from "react-router-dom";
import ConnectApi from "../api/ConnectApi";

import Header from "./framework/Header";
import Footer from "./framework/Footer";

import { Box, Button, Card, CardActions, CardContent, CardHeader,Container, CssBaseline, Grid, Link, Typography, Alert, AlertTitle, RadioGroup, FormControlLabel, Checkbox } from "@mui/material";
import { makeStyles } from "@mui/styles";






const useStyles = makeStyles((theme) => ({

    paper: {
        // marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
    },
    form: {
        width: "100%",
        // marginTop: theme.spacing(1),
    },
    submit: {
        // margin: theme.spacing(3, 0, 2),
    },
    correct: {
        color: "blue",
    },
}));


export const RandomQuiz = () => {
    const classes = useStyles();
    const {topic} = useParams();

    const API_URL = "http://127.0.0.1:8080/quiz/r/" + topic;
    const [dataState] = ConnectApi(API_URL);
    console.log(dataState)

    const a = dataState.data.flatMap((q) => q.answer);
    console.log(a)

    const ac = a.length
    console.log(ac)
    const [answer, setAnswer] = useState({});
    const [answerCheck, setAnswerCheck] = useState();


useEffect(() => {

    if (Object.keys(answer).length === 0) {
        setAnswer(createInitialAnswers());
    }
}, [answer]);
    
    
    
const handleSelection = (e) => {

    setAnswer({ ...answer, [e.target.value]: e.target.checked});
}


const createInitialAnswers = () => {
    let z = a.flatMap((obj) => obj.id);
    var object = {};
    for (var x = 0; x < ac; x++) {
        object[z[x]] = false;
    }
    return object;
};

// console.log(answer)

const checkAnswer = (e) => {
    e.preventDefault();

    let n = a.map((obj) => obj.is_right);
    let y = {...n };

    function arrayEquals(o,p) {
        return (
            Array.isArray(o) &&
            Array.isArray(p) &&
            o.length === p.length &&
            o.every((val, index) => val === p[index])

        );
    }

    let o = Object.values(y);
    let p = Object.values(answer);
    if (arrayEquals(o, p)) {
        setAnswerCheck(true);
        console.log("correct");
    } else {
        setAnswerCheck(false);
        console.log("incorrect");
    }
};

function refreshPage(){
    window.location.reload(false);
}


function Result() {
    if (answerCheck == true) {
        return (
            <Alert severity="success">
                <AlertTitle>Correct Answer</AlertTitle>
                Well done you got it right —{" "}
                <Link href="#" varient="body2" onClick={refreshPage}>
                {"Next Question"}
                </Link>
            </Alert>
        );
    } else if (answerCheck === false) {
        return (
            <Alert severity="error">
                <AlertTitle>Wrong Answer</AlertTitle>
                Please Try Again
            </Alert>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}




return (
    <React.Fragment>
    <Header />

    <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
            {dataState.data.map(({title, answer}, i) => (
                <div key={i}>
                    <Typography component="h1" varient="h5">
                        {title}
                        </Typography>
                        {answer.map(({answer_text, id}) => (
                            <RadioGroup>
                                <FormControlLabel
                                control={
                                <Checkbox
                                value={id}
                                color="primary"
                            onChange={handleSelection}
                            />
                                }
                                label={answer_text}
                                />

                            </RadioGroup>
                        ))}
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={ checkAnswer}
                        >
                            Submit Answer
                        </Button>
                            <Result />


                        </div>
            ))}
        </div>

    </Container>





    <Footer />
    </React.Fragment>
);
// console.log(topic);


};

export default RandomQuiz;