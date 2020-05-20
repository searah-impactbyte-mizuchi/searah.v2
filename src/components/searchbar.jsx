import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { red } from '@material-ui/core/colors';
import { fetchProfile } from '../redux/actions/profileActions';
import { useDispatch } from 'react-redux';
import { fetchTrip } from '../redux/actions/mainAction'
import { Formik } from "formik";
import Grid from '@material-ui/core/Grid';
import {
    MuiPickersUtilsProvider,
    // KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// import Date from './date/Date'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    border: {
        border: "solid",
        color: "#fae7c5"
    },
    floatingLabelFocusStyle: {
        color: "#fae7c5",
        fontFamily: 'Comfortaa, cursive'
    },
}));




function SearchInput() {
    const dispatch = useDispatch()

    // const handleSubmit = (values) => {
    //     dispatch (fetchTrip(values))
    // }
    return (
        <Fragment>
            <Formik
                initialValues={{ destination: '' }}
                // validate={values => {
                //     const errors = {};
                //     if (!values.location) {
                //         errors.location = 'Required';
                //     }
                //     if (!values.destination) {
                //         errors.destination = 'Required'
                //     }
                //     return errors;
                // }}
                onSubmit={(values) => {
                    dispatch(fetchTrip(values))
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    // }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <form onSubmit={handleSubmit}>
                            <h3>search disini</h3>
                            <TextField
                                id="destination"
                                name="destination"
                                // label="Label"
                                style={{ margin: 8 }}
                                placeholder="Bali, Malang, Surabaya"
                                // helperText="Full width!"
                                fullWidth
                                margin="normal"
                                onBlur={handleBlur}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                onChange={handleChange}
                                value={values.destination}
                            />
                            <p style={{ color: "red", fontStyle: "italic", }}>
                                {errors.destination && touched.destination && errors.destination}
                            </p>
                            <Button
                                variant="contained"
                                color="secondary"
                                type="submit"
                            >Start your journey here <SearchIcon />
                            </Button>
                        </form>
                    )}
            </Formik>

        </Fragment>
    );
}

export default SearchInput