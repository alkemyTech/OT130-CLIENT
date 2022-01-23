import React , { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import '../FormStyles.css';
import { PASSWORD_REGISTER_CONTAIN, PASSWORD_DONT_MATCH, PASSWORD_SHORT } from "../../Helpers/messagesText";
import { yupFirstName, yupLastName, yupPassRegister, yupConfirmPass, yupEmail } from "../../Helpers/yupValidations";

const RegisterForm = () => {
    const [submitForm, setSubmitForm] = useState(false);

    const timerMessage = (time) => {
        setTimeout( () => {
            setSubmitForm(false);
        }, time);
    };

    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            firstName: yupFirstName(),
            lastName: yupLastName(),
            email: yupEmail(),
            password: yupPassRegister(PASSWORD_SHORT, PASSWORD_REGISTER_CONTAIN),
            confirmPassword: yupConfirmPass('password', PASSWORD_DONT_MATCH),
        }),
        onSubmit: values => {
            setSubmitForm(true);
            timerMessage(3000);
            formik.resetForm();
            console.log(values)
        },
    });


    return(
        <form className="form-container" onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                type="text"
                className="input-field"
                {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error message">{formik.errors.firstName}</div>
            ) : null}
        
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                type="text"
                className="input-field"
                {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div className="error message">{formik.errors.lastName}</div>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                type="email"
                className="input-field"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="error message" >{formik.errors.email}</div>
            ) : null}

            <label htmlFor="pass">Password</label>
            <input
                id="pass"
                type="password"
                className="input-field"
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className="error message">{formik.errors.password}</div>
            ) : null}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                id="confirmPassword"
                type="password"
                className="input-field"
                {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="error message">{formik.errors.confirmPassword}</div>
            ) : null}

            <button className="submit-btn"  type="submit" >Submit</button>
            {submitForm && <div className="success message">Form submitted successfully</div>}
        </form>
    );

};

export default RegisterForm;