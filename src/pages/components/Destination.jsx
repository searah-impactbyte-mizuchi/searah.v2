import React from "react";
import TextField from "@material-ui/core/TextField";
import {
    MuiPickersUtilsProvider,
    // KeyboardTimePicker,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
// import Date from './date/Date'
import { Formik } from "formik";
import Grid from "@material-ui/core/Grid";

export default function Destination() {
    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2020-05-01T21:11:54")
    );
    const [selectedDate1, setSelectedDate1] = React.useState(
        new Date("2020-05-01T21:11:54")
    );

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleDateChange1 = (date1) => {
        setSelectedDate1(date1);
    };

    return (
        <div>
            <Formik
                initialValues={{ location: "", destination: "" }}
                validate={(values) => {
                    const errors = {};
                    if (!values.location) {
                        errors.location = "Required";
                    }
                    if (!values.destination) {
                        errors.destination = "Required";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
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
                        <h3>What is your current location?</h3>
                        <TextField
                            id="location"
                            name="location"
                            // label="Label"
                            style={{ margin: 8 }}
                            placeholder="Jakarta, Indonesia"
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            onBlur={handleBlur}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={handleChange}
                            value={values.location}
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                            {errors.location &&
                                touched.location &&
                                errors.location}
                        </p>
                        <h3>Where are you going?</h3>
                        <TextField
                            id="destination"
                            name="destination"
                            // label="Label"
                            style={{ margin: 8 }}
                            placeholder="Malang"
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
                            required
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                            {errors.destination &&
                                touched.destination &&
                                errors.destination}
                        </p>
                        <h3>When you plan for your trip?</h3>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <div>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="From"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            "aria-label": "change date",
                                        }}
                                    />
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="To"
                                        format="MM/dd/yyyy"
                                        value={selectedDate1}
                                        onChange={handleDateChange1}
                                        KeyboardButtonProps={{
                                            "aria-label": "change date",
                                        }}
                                    />
                                </Grid>
                            </div>
                        </MuiPickersUtilsProvider>
                    </form>
                )}
            </Formik>
        </div>
    );
}
