import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Formik } from "formik";

export default function Trip() {
    return (
        <div>
            <h3>Name Your Trip</h3>
            <Formik
                initialValues={{ title: '', description: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Required';
                    }
                    if (!values.description) {
                        errors.description = 'Required';
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
                                name="title"
                                // label="Label"
                                style={{ margin: 8 }}
                                placeholder="A multi-day trip to explore the unknown"
                                // helperText="Full width!"
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
                            <p style={{ color: "red", fontStyle: "italic", }}>
                                {errors.title && touched.title && errors.title}
                            </p>
                            <h3>Short description of your trip</h3>
                            <TextField
                                id="outlined-multiline-static"
                                name="description"
                                // label="Multiline"
                                multiline
                                rows={8}
                                column={10}
                                // placeholder="Placeholder"
                                // defaultValue="Default Value"
                                variant="outlined"
                                fullWidth={10}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                                required
                            />
                            <p style={{ color: "red", fontStyle: "italic", }}>
                                {errors.description && touched.description && errors.description}
                            </p>
                        </form>
                    )}
            </Formik>
        </div>
    )
}
