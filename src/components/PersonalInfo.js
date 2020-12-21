import React, { Fragment, useState } from 'react';

// Native Imports from Node_Modules
import { TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const PersonalInfo = ({ values, nextStep, onInputChange, getInputValue, stepHeader }) => {

    // Creating Show Password state & converter Methods
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    // Move to Next Form Content Method
    const continueForm = e => {
        e.preventDefault();
        nextStep();
    };

    // Creating Customized Next Button Styles
    const nextButtonStyles = {
        color: "#fff",
        backgroundColor: "#1777FB",
        padding: "5px 50px"
    };

    return (
        <Fragment>
            <Typography align="center" variant="h6" gutterBottom className="step-header">{stepHeader}</Typography>
            <div className="inputs-container">
                <TextField
                    fullWidth
                    size="small"
                    value={values.user_full_name}
                    label="Full Name"
                    variant="outlined"
                    onChange={onInputChange("user_full_name")}
                    placeholder="Enter Your Full Name"
                    className="input-field"
                />
                <TextField
                    fullWidth
                    size="small"
                    value={values.user_email}
                    label="Business Email"
                    variant="outlined"
                    onChange={onInputChange("user_email")}
                    placeholder="Enter Your Business Email"
                    className="input-field"
                />
                <div className="input-group">
                    <TextField
                        id="outlined-select-country"
                        select
                        label="Country"
                        value={values.user_nationality}
                        onChange={onInputChange("user_nationality")}
                        variant="outlined"
                        size="small"
                    >
                        <option value={"US"}>USA</option>
                        <option value={"CAN"}>CANADA</option>
                        <option value={"EGY"}>EGYPT</option>
                    </TextField>
                    <div>
                        <PhoneInput
                            defaultCountry={'US'}
                            value=""
                            onChange={phone => getInputValue("user_phone", phone)}
                        />
                    </div>
                </div>
                <FormControl variant="outlined" fullWidth size="small" className="input-field">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={values.user_password}
                        onChange={onInputChange('user_password')}
                        placeholder="choose your password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    onMouseDown={e => e.preventDefault()}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                <FormControl variant="outlined" fullWidth size="small" className="input-field">
                    <InputLabel htmlFor="outlined-adornment-password2">Repeat Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password2"
                        type={showPassword2 ? 'text' : 'password'}
                        value={values.user_password_confirmation}
                        onChange={onInputChange('user_password_confirmation')}
                        placeholder="confirm your password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword2(!showPassword2)}
                                    onMouseDown={e => e.preventDefault()}
                                    edge="end"
                                >
                                    {showPassword2 ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
            </div>
            <div className="content-actions">
                <Button
                    variant="contained"
                    style={nextButtonStyles}
                    onClick={continueForm}
                >
                    Next
                </Button>
            </div>
        </Fragment>
    );
}

export default PersonalInfo;
