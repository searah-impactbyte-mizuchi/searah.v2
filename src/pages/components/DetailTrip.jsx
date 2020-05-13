import React from 'react'
import TextField from '@material-ui/core/TextField';
// import {
//     MuiPickersUtilsProvider,
//     // KeyboardTimePicker,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

export default function destination() {
    return (
        <div>
            <div>
                <h3>Name Your Trip</h3>
                <TextField
                    id="outlined-full-width"
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
                />

            </div>
            <div>
                <h3>Short description of your trip</h3>
                <TextField
                    id="outlined-multiline-static"
                    // label="Multiline"
                    multiline
                    rows={8}
                    column={10}
                    // placeholder="Placeholder"
                    // defaultValue="Default Value"
                    variant="outlined"
                    fullWidth={10}
                />

            </div>
        </div>
    )
}
