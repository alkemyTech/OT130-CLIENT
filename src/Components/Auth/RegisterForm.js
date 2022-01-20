import React , {useState} from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import '../FormStyles.css';

const RegisterForm = () => {
    const [submitForm, setSubmitForm] = useState(false);
    const initialValues = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const timerMessage = (time)=>{
        setTimeout(()=>{
            setSubmitForm(false);
        },time);
    }
    const validateInputs = (values) => {
        let error = {};

        if(!values.name){
            error.name = 'Name is required';
        }
        if(!values.lastName){
            error.lastName = 'Last name is required';
        }
        if(!values.email){
            error.email = 'Email is required';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            error.email = 'Invalid email address';
        }
        if(!values.password){
            error.password = 'Password is required';
        }
        else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(values.password)){
            error.password= 'Password must contain at least 6 characters, one letter, one number and one special character';
        }
        if(!values.confirmPassword){
            error.confirmPassword ='Confirm password is required';
        }
        else if(values.confirmPassword !== values.password){
            error.confirmPassword = 'Passwords do not match';
        }
        return error;
    }

    return(
        <>
            <Formik
                initialValues={initialValues}

                validate={validateInputs}
                onSubmit={(values,{resetForm})=>{
                    resetForm();
                    setSubmitForm(true);
                    timerMessage(3000);
                    console.log(values);
                    console.log('Form submit');
                }}
            >
                {({errors})=>(
                    <Form className="form-container">
                        <Field className="input-field" type="text" name="name"  placeholder="Enter name"></Field>
                        <ErrorMessage name="name" component={()=>(<div className='error-message'>{errors.name}</div>)}/>   
                        <Field className="input-field" type="text" name="lastName" placeholder="Enter last name"></Field>
                        <ErrorMessage name="lastName" component={()=>(<div className='error-message'>{errors.lastName}</div>)}/> 
                        <Field className="input-field" type="text" name="email" placeholder="Email"></Field>
                        <ErrorMessage name="email" component={()=>(<div className='error-message'>{errors.email}</div>)}/> 
                        <Field className="input-field" type="password" name="password" placeholder="Password"></Field>
                        <ErrorMessage name="password" component={()=>(<div className='error-message'>{errors.password}</div>)}/> 
                        <Field className="input-field" type="password" name="confirmPassword" placeholder="Confirm password"></Field>
                        <ErrorMessage name="confirmPassword" component={()=>(<div className='error-message'>{errors.confirmPassword}</div>)}/> 
                        <button className="submit-btn" type="submit">Register</button>
                        {submitForm && <div className="success-message">Form submitted successfully</div>}
                    </Form>
                )}
            </Formik>
        </>
    )

}
 
export default RegisterForm;