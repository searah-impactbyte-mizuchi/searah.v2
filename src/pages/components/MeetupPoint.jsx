import React from 'react'
import TextField from '@material-ui/core/TextField';
import Maps from './maps/Maps'


export default function MeetupPoint() {
    return (
        <div>
            <div>
                <h3>Meetup Point</h3>
                <TextField
                    id="outlined-full-width"
                    // label="Label"
                    style={{ margin: 8 }}
                    placeholder="Bandara Soekarno Hatta, Tangerang"
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
                <Maps />
            </div>
        </div>
    )
}
