import React, { Fragment } from 'react';

// Native Imports from Node_Modules
import { TextField, Typography, FormControl, InputLabel, Button, Select, MenuItem } from '@material-ui/core';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const CompanyInfo = ({ values, nextStep, prevStep, onInputChange, getInputValue, stepHeader }) => {

    const continueForm = e => {
        e.preventDefault();
        nextStep();
    };

    const backForm = e => {
        e.preventDefault();
        prevStep();
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
                <div>
                    <TextField
                        size="small"
                        value={values.company_name}
                        label="Company Name"
                        variant="outlined"
                        onChange={onInputChange("company_name")}
                        placeholder="Enter Your Company Name"
                        className="border-radius-right-none"
                        style={{ width: "80%" }}
                    />
                    <FormControl variant="outlined" size="small" style={{ width: "20%" }}>
                        <InputLabel id="demo-simple-select-outlined-label">Lang</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={values.lang}
                            onChange={onInputChange('lang')}
                            label="Language"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'EN'}>English</MenuItem>
                            <MenuItem value={'AR'}>Arabic</MenuItem>
                            <MenuItem value={'FR'}>French</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <TextField
                    fullWidth
                    size="small"
                    value={values.company_address}
                    label="Address"
                    variant="outlined"
                    onChange={onInputChange("company_address")}
                    placeholder="Enter Your Address"
                    className="input-field"
                />
                <TextField
                    fullWidth
                    size="small"
                    value={values.company_business_email}
                    label="Business Email"
                    variant="outlined"
                    onChange={onInputChange("company_business_email")}
                    placeholder="Enter Your Business Email"
                    className="input-field"
                />
                <div className="input-group-equal">
                    <FormControl variant="outlined" size="small">
                        <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={values.company_country_id}
                            onChange={onInputChange('company_country_id')}
                            label="Choose your country"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'1'}>USA</MenuItem>
                            <MenuItem value={'2'}>CANADA</MenuItem>
                            <MenuItem value={'3'}>EGYPT</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" size="small">
                        <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={values.company_city_id}
                            onChange={onInputChange('company_city_id')}
                            label="Choose your city"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'1'}>Washington</MenuItem>
                            <MenuItem value={'2'}>Montterial</MenuItem>
                            <MenuItem value={'3'}>Cairo</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="input-group-equal">
                    <div>
                        <PhoneInput
                            placeholder="Enter company phone number"
                            value=""
                            onChange={phone => getInputValue("company_phone", phone)} />
                    </div>
                    <div>
                        <PhoneInput
                            placeholder="Enter company phone number"
                            value=""
                            onChange={phone => getInputValue("company_extra_data_phone", phone)} />
                    </div>
                </div>
            </div>
            <div className="content-actions">
                <Button
                    variant="contained"
                    onClick={backForm}
                    style={{ marginRight: "5px" }}
                >
                    Back
                </Button>
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

export default CompanyInfo;
