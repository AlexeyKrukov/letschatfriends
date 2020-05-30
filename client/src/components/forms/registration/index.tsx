import {Button, TextField} from "@material-ui/core";
import React from "react";

export default function RegistrationForm() {
    return (
        <form method="post">
            <TextField
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth={true}
                id="emailReg"
                label="Email Address"
                name="emailReg"
                autoComplete="email"
                autoFocus={true}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth={true}
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
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
            <TextField
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth={true}
                name="password_confirm"
                label="Confirm password"
                type="password"
                id="password_confirm"
                autoComplete="current-password"
            />
            <div style={{marginTop: "15px"}}>
                <Button
                    type="submit"
                    fullWidth={true}
                    variant="contained"
                    color="primary"
                >
                    Sign Up
                </Button>
            </div>
        </form>
    );
}
