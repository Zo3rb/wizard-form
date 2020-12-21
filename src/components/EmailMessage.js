import React, { Fragment } from 'react';

// Native Imports from Node_Modules
import { Typography, Button } from '@material-ui/core';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';

const EmailMessage = ({ values, prevStep, stepHeader }) => {

    /*
    -- TODO => 1 - Import axios
    -- TODO => 2 - Edit The function, uncomment it & invoke it on Confirm Button
    const onFormSubmit => async values => {
        // values -- @param => The form Values
        try {
            const response = await axios.post("ENTER API Endpoint URL Here", values)
            // -- TODO => Render Success Request Component Here With "Response" Object from The API
        } catch (err) {
            // -- TODO => Render Fail Request Component Here
        }
    }
    */

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

    // Creating Render Helper Method
    const renderEmailMessage = () => {
        if (values.user_email) {
            return (
                <Fragment>
                    <Typography variant="subtitle1" align="center" style={{ color: "red" }} gutterBottom>We will send a message for this e-mail</Typography>
                    <Typography variant="subtitle1" align="center" gutterBottom>{values.user_email}</Typography>
                </Fragment>
            )
        }
    }

    return (
        <Fragment>
            <Typography align="center" variant="h6" gutterBottom className="step-header">{stepHeader}</Typography>
            <div className="inputs-container" style={{ textAlign: 'center' }}>
                <MarkunreadMailboxIcon
                    color="primary"
                    style={{ fontSize: "100px", margin: "20px auto" }}
                />
                {renderEmailMessage()}
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
                    onClick={() => alert("Edit 'onFormSubmit' Function in EmailMessage Component Please")}
                >
                    Confirm
                </Button>
            </div>
        </Fragment>
    );
}

export default EmailMessage;
