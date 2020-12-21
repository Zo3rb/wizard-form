import React, { Fragment } from 'react';

// Native Imports from Node_Modules
import { Typography, Button, } from '@material-ui/core';
import 'smart-webcomponents-react/source/styles/smart.default.css';
import { FileUpload } from 'smart-webcomponents-react/fileupload';

const CompanyLogo = ({ nextStep, prevStep, stepHeader }) => {

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
                <FileUpload uploadUrl="" />
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

export default CompanyLogo;
