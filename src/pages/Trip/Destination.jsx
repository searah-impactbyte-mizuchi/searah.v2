import React from "react";
import TextField from "@material-ui/core/TextField";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";

export default function Destination(props) {
    const { errors, touched, handleBlur, handleChange, values, setFieldValue } = props;
    // const [selectedDate, setSelectedDate] = React.useState(
    //     new Date("2020-05-01T21:11:54")
    // );
    // const [selectedDate1, setSelectedDate1] = React.useState(
    //     new Date("2020-05-01T21:11:54")
    // );

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };
    // const handleDateChange1 = (date1) => {
    //     setSelectedDate1(date1);
    // };

    return (
        <React.Fragment>
            <h3>What is your current location?</h3>
            <TextField
                id="location"
                name="location"
                style={{ margin: 8 }}
                placeholder="Jakarta, Indonesia"
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
                {errors.location && touched.location && errors.location}
            </p>
            <h3>Where are you going?</h3>
            <TextField
                id="destination"
                name="destination"
                style={{ margin: 8 }}
                placeholder="Malang"
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
                            name="from"
                            format="MM/dd/yyyy"
                            value={values.from}
                            // onChange={handleDateChange}
                            onChange={e => setFieldValue('from', e)}
                            KeyboardButtonProps={{
                                "aria-label": "change date",
                            }}
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                            {errors.from &&
                                touched.from &&
                                errors.from}
                        </p>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="To"
                            name="to"
                            format="MM/dd/yyyy"
                            value={values.to}
                            // onChange={handleDateChange1}
                            onChange={e => setFieldValue('to', e)}
                            KeyboardButtonProps={{
                                "aria-label": "change date",
                            }}
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                            {errors.to &&
                                touched.to &&
                                errors.to}
                        </p>
                    </Grid>
                </div>
            </MuiPickersUtilsProvider>
        </React.Fragment>
    );
}
