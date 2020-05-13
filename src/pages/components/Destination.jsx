import React from 'react'
import TextField from '@material-ui/core/TextField';
import {
    MuiPickersUtilsProvider,
    // KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Date from './date/Date'

export default function destination() {
    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };
    return (
        <div>
            <div>
                <h3>What is your current location?</h3>
                <TextField
                    id="outlined-full-width"
                    // label="Label"
                    style={{ margin: 8 }}
                    placeholder="Jakarta, Indonesia"
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
                <h3>Where are you going?</h3>
                <TextField
                    id="outlined-full-width"
                    // label="Label"
                    style={{ margin: 8 }}
                    placeholder="Malang"
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
                <h3>When you plan for your trip?</h3>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div>
                        <Date />
                        
                    </div>
                </MuiPickersUtilsProvider>

            </div>
        </div>
    )
}
