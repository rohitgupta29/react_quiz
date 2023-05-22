import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// import styled from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,  //a build in UI functionality 
    },
    toolbarTitle:{
        flexGrow:1,
    }
}));


export default function Header(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" elevation={0}>
                    <Toolbar>
                        <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.toolbarTitle}> 
                            Quizzes     
                        </Typography>
                    </Toolbar>
                
            </AppBar>
            
        </div>
    )
}