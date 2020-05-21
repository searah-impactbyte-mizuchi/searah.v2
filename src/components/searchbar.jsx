import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { fetchTrip } from "../redux/actions/mainAction";
import { Formik } from "formik";

function SearchInput() {
    const dispatch = useDispatch();

    return (
        <Fragment>
            <Formik
                initialValues={{ destination: "" }}
                onSubmit={(values) => {
                    dispatch(fetchTrip(values));
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
                        <h3>Search here</h3>
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
                        <p style={{ color: "red", fontStyle: "italic" }}>
                            {errors.destination &&
                                touched.destination &&
                                errors.destination}
                        </p>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            style={{ marginLeft: 16}}
                        >
                            Start your journey here <SearchIcon />
                        </Button>
                    </form>
                )}
            </Formik>
        </Fragment>
    );
}

export default SearchInput;
