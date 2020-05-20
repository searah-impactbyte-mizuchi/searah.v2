import React from "react";
import TextField from "@material-ui/core/TextField";
import Maps from "./maps/Maps";

export default function MeetupPoint(props) {
    const { values, handleBlur, handleChange, touched, errors } = props;

    return (
        <React.Fragment>
            <h3>Meetup Point</h3>

            <TextField
                id="outlined-full-width"
                name="meetupPoint"
                style={{ margin: 8 }}
                placeholder="Bandara Soekarno Hatta, Tangerang"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.meetupPoint}
                required
            />
            <p style={{ color: "red", fontStyle: "italic" }}>
                {errors.meetupPoint &&
                    touched.meetupPoint &&
                    errors.meetupPoint}
            </p>

            <div>{/* <Maps /> */}</div>
        </React.Fragment>
    );
}
