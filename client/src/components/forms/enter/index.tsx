import React from 'react';
import { Button, TextField, FormControlLabel, Checkbox, Grid, Link } from "@material-ui/core";
import {IFormsProps} from "../../../interfaces";

const EnterForm: React.FC<IFormsProps> = ({ setFormType }) => {

    function switchTypeToRegistration() {
        setFormType('registration');
    }

    return (
        <form noValidate={true} method="post">
            <TextField
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth={true}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus={true}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth={true}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary"/>}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth={true}
                variant="contained"
                color="primary"
            >
                Sign In
            </Button>
            <Grid container={true}>
                <Grid item={true} md={true} xs={true}>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item={true} md={true} xs={true}>
                    <div style={{cursor: "pointer"}}>
                        <Link onClick={switchTypeToRegistration} variant="body2" >
                            {"Sign Up"}
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}

export default EnterForm;
