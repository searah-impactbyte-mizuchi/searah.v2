
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import MaterialLink from "@material-ui/core/Link";
import CallMergeIcon from '@material-ui/icons/CallMerge';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

// import { useDispatch, useSelector } from "react-redux"
import Logo from '../components/logo/Tourist2.jpg'


import { useSelector, useDispatch } from "react-redux"
import { loginUser } from "../redux/actions/loginActions"
import { getUser } from "../redux/actions/userActions"
import { useHistory } from "react-router-dom"



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <MaterialLink color="inherit" href="https://material-ui.com/">
                SEARAH
            </MaterialLink>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(16),
        marginBottom: theme.spacing(16),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background:"linear-gradient(rgba(81, 86, 137),rgba(102, 151, 167),rgba(140, 205, 194),rgba(190, 218, 199),rgba(250, 235, 208),transparent)",
        padding: 5,
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        fontFamily: 'Comfortaa, cursive',
        // fontFamily: 'Kalam, cursive',
        backgroundColor: "#8ccdc2",
        background:"linear-gradient(rgba(81, 86, 137),rgba(102, 151, 167, 0.5),transparent)",
        color: "whitesmoke"
    },
    font: {
        // fontFamily: 'Kalam, cursive',
        fontFamily: 'Comfortaa, cursive',
        // backgroundColor: "whitesmoke"
    },
    font2: {
        // fontFamily: 'Kalam, cursive',
        fontFamily: 'Comfortaa, cursive',
        color: "whitesmoke",
        marginTop: 10,
    },
    font3: {
        // fontFamily: 'Kalam, cursive',
        fontFamily: 'Comfortaa, cursive',
        // color: "whitesmoke"
    },
    font4: {
        // fontFamily: 'Kalam, cursive',
        fontFamily: 'Comfortaa, cursive',
        color: "whitesmoke",
        marginBottom: 20,
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: 20,
      },
      floatingLabelFocusStyle: {
        color: "#0c3854",
        fontFamily: 'Comfortaa, cursive'
    },
}));

export default function SignIn() {
    const classes = useStyles();
    // const existingUser = useSelector(state => state.existingUser)
    const dispatch = useDispatch();

    const history = useHistory ()



    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h4" className={classes.font2}>
                    SEARAH
                </Typography>
                <Avatar alt="Remy Sharp" src={Logo} className={classes.large} />
                {/* <Avatar className={classes.avatar}>
                    <CallMergeIcon />
                </Avatar> */}
                <Typography component="h1" variant="h5" className={classes.font4}>
                    Sign in
                </Typography>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid email address";
                        }

                        if (!values.password) {
                            errors.password = "Required";
                        }

                        return errors;
                    }}
                    onSubmit={async(values) => {
                         await dispatch(loginUser(values, history));
                         
                       
                        
                        


                        

        
                        // console.log(values);
                        
                        // alert("Login is succsessful")
                        // this.props.push('./main-page');


                        // const existingUser = userList.find((element) => element.email === values.email);


                        // if (existingUser === undefined) {
                        //     alert('user tidak ditemukan');
                        // } else if (
                        //     existingUser.password !== values.password ||
                        //     existingUser.email !== values.email
                        // ) {
                        //     alert('email/password salah');
                        // } else if (
                        //     existingUser.role === `admin`
                        // ) {
                        //     alert('selamat datang admin ');
                        // } else if (
                        //     existingUser.status === `pending`
                        // ) {
                        //     alert('mohon maaf silahkan tunggu dulu ea');
                        // } else {
                        //     localStorage.setItem('isLogin', true);
                        //     localStorage.setItem('userData', JSON.stringify(existingUser));
                        //     alert(`selamat datang kembali ${existingUser.name}`);
                        //     this.props.history.push('/dashboard');
                        // }
                    }}
                >
                    {({
                        handleChange,
                        handleSubmit,
                        values,
                        isSubmitting,
                        errors,
                        touched,
                    }) => {
                        return (
                            <form
                                className={classes.form}
                                noValidate
                                onSubmit={handleSubmit}
                            >
                                <TextField
                                    variant="outlined"
                                    className={classes.margin}
                                    id="email"
                                    label="Email"
                                    fullWidth
                                    name="email"     
                                    type="email"
                                    autoComplete="current-email"
                                    onChange={handleChange}
                                    value={values.email}
                                    InputLabelProps={{
                                        className: classes.floatingLabelFocusStyle,
                                    }}
                                    
                                    // InputProps={{
                                    //     startAdornment: (
                                    //         <InputAdornment position="start">
                                    //             <AccountCircle />
                                    //         </InputAdornment>
                                    //     ),
                                    // }}
                                />
                                <p
                                    style={{
                                        color: "red",
                                        fontStyle: "italic",
                                    }}
                                >
                                    {errors.email &&
                                        touched.email &&
                                        errors.email}
                                </p>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                    value={values.password}
                                    InputLabelProps={{
                                        className: classes.floatingLabelFocusStyle,
                                    }}

                                    // InputProps={{
                                    //     startAdornment: (
                                    //         <InputAdornment position="start">
                                    //             <LockIcon />
                                    //         </InputAdornment>
                                    //     ),
                                    // }}
                                />
                                <p
                                    style={{
                                        color: "red",
                                        fontStyle: "italic",
                                    }}
                                >
                                    {errors.password &&
                                        touched.password &&
                                        errors.password}
                                </p>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={isSubmitting}
                                >
                                    Sign In
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link
                                            to="/sign-up"
                                            style={{ textDecoration: "none" }}
                                            className={classes.font3}
                                        >
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        );
                    }}
                </Formik>
            
            <Box mt={8}>
                <Copyright />
            </Box>
            </div>
        </Container>
    );
}