import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Grid } from '@material-ui/core';

function EditProfileDialog(props) {

    return (
        <div>
            <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill only the fields you want to update.
                        </DialogContentText>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField variant="outlined" label="First Name" id="firstName" name="firstName" required fullWidth autoFocus onChange={props.change} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField variant="outlined" label="Last Name" id="lastName" name="lastName" required fullWidth onChange={props.change} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" label="Password" id="password" name="password" fullWidth type="password" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" label="Re-Enter Password" id="repassword" name="repassword" fullWidth type="password" />
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.confirm} color="primary" variant="contained">
                        Confirm
                      </Button>
                    <Button onClick={props.close} color="primary" variant="contained">
                        Cancel
                      </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EditProfileDialog;
