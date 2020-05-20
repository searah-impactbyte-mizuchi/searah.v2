import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Trip(props) {
    const { values, handleChange, handleBlur, touched, errors } = props;

    return (
        <React.Fragment>
            <h3>Name Your Trip</h3>
            <TextField
                id="outlined-full-width"
                name="title"
                style={{ margin: 8 }}
                placeholder="A multi-day trip to explore the unknown"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                required
            />
            <p style={{ color: "red", fontStyle: "italic" }}>
                {errors.title && touched.title && errors.title}
            </p>
            <h3>Short description of your trip</h3>
            <TextField
                id="outlined-multiline-static"
                name="description"
                multiline
                rows={8}
                column={10}
                variant="outlined"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                required
            />
            <p style={{ color: "red", fontStyle: "italic" }}>
                {errors.description &&
                    touched.description &&
                    errors.description}
            </p>
        </React.Fragment>
    );
}
