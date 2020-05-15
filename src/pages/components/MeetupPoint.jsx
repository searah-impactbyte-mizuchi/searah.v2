import React from 'react'
import TextField from '@material-ui/core/TextField';
import Maps from './maps/Maps'
import { Formik } from "formik";


export default function MeetupPoint() {
    return (
        <div>
            <div>
                <h3>Meetup Point</h3>
                <Formik
                    initialValues={{ meetupPoint: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.meetupPoint) {
                            errors.meetupPoint = 'Required';
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
                                <TextField
                                    id="outlined-full-width"
                                    name="meetupPoint"
                                    style={{ margin: 8 }}
                                    placeholder="Bandara Soekarno Hatta, Tangerang"
                                    // helperText="Full width!"
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
                                <p style={{ color: "red", fontStyle: "italic", }}>
                                    {errors.meetupPoint && touched.meetupPoint && errors.meetupPoint}
                                </p>
                            </form>
                        )}
                </Formik>
            </div>
            <div>
                <Maps />
            </div>
        </div>
    )
}
