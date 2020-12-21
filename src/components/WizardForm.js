import React, { Fragment, useState } from 'react';

// Native Imports from Node_Modules
import { Row, Col, Steps } from 'antd';
import { UserAddOutlined, BankOutlined, PictureOutlined, SecurityScanOutlined } from '@ant-design/icons';

// Internal Imports from App Structure
import { PersonalInfo, CompanyInfo, CompanyLogo, EmailMessage } from './';
import "../assets/styles/wizardform.css";

const WizardForm = () => {

    // Creating Our FormData Object => Pulling all the Data Out from The Object to Use by Name instead of formData.valueName => Creating Values Object to Pass to Steps
    const [formData, setFormData] = useState({
        user_full_name: "",
        user_email: "",
        user_phone: "",
        user_position: "",
        user_nationality: "",
        user_password: "",
        user_password_confirmation: "",
        user_status: "",
        user_is_admin: "",
        company_name: "",
        lang: "",
        company_address: "",
        company_business_email: "",
        company_country_id: "",
        company_city_id: "",
        company_phone: "",
        company_extra_data_phone: "",
        created_by: "",
        company_avatar: "",
    });
    const values = { ...formData };

    // Creating Parsing Phone Helper Method
    const getInputValue = (input, value) => setFormData({ ...formData, [input]: value });

    // Creating The Step state and Stepper Methods / Input Changing Method
    const [step, setStep] = useState(1);
    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);
    const onInputChange = input => e => setFormData({ ...formData, [input]: e.target.value });

    // Creating Render Helper Function to Switch Content Based on Step
    const renderSwitch = (step) => {
        // Switch Content Based on The Step Number
        switch (step) {
            case 1:
                return (
                    <PersonalInfo values={values} nextStep={nextStep} onInputChange={onInputChange} getInputValue={getInputValue} stepHeader="Tell us more about you." />
                )
            case 2:
                return (
                    <CompanyInfo values={values} nextStep={nextStep} prevStep={prevStep} onInputChange={onInputChange} getInputValue={getInputValue} stepHeader="Verify your company." />
                )
            case 3:
                return (
                    <CompanyLogo values={values} nextStep={nextStep} prevStep={prevStep} onInputChange={onInputChange} stepHeader="Upload company logo." />
                )
            case 4:
                return (
                    <EmailMessage values={values} prevStep={prevStep} stepHeader="You're all set. Ready? " />
                )
        }
    };

    // Creating The User-Interface Step from Ant Design
    const { Step } = Steps;

    return (
        <Fragment>
            <Row justify="center">
                <Col xs={12} sm={20} md={16} className="wizard-wrapper">
                    <Steps current={step - 1}>
                        <Step icon={<UserAddOutlined />} />
                        <Step icon={<BankOutlined />} />
                        <Step icon={<PictureOutlined />} />
                        <Step icon={<SecurityScanOutlined />} />
                    </Steps>
                    {
                        renderSwitch(step)
                    }
                </Col>
            </Row>
        </Fragment>
    )
};

export default WizardForm;
