import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import { Link } from 'react-router-dom';


// interface LoginProps {}

// const Login: React.FC<LoginProps> = () => {

//   const [username, setUsername] = useState<string>('');
//   const [password, setPassword] = useState<string>('');

//   const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) => 
//   {
//     e.preventDefault();
//     console.log("Welcome back highroller!"); 
//     //Send information to Validate data in database to allow login 
//   };

interface LoginValues {
    username: string; 
    password: string;
}
const alphanumericRegex = /^[a-zA-Z0-9_]*$/;

const validationSchema = Yup.object().shape ({
    
    username: Yup.string()
        .min(3,'Too short, this email does not exist on the database.')
        .max(15, 'Too long, this username does not exist')
        .required('Username is required')
        .matches(alphanumericRegex, 'Only alphanumeric characters and underscores are allowed'),

    password: Yup.string()
        .min(6, 'Too short, no password will match')
        .required('Password is required'),
        
        
});

const Login: React.FC = () => {
    const initialValues: LoginValues = {
        username: '',
        password: '', 
    };

    const handleSubmit = (values: LoginValues) => {
        console.log(`Username: ${values.username}, Password: ${values.password}`);
        //Fill w code to send data to the server for adding a new user 
    };


  return (
    <div className="background">
    <div className="container">
    <div className="card">
        <h2>Gambler Login</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched }) => (
                <form>
                <label>
                    Username:
                    <Field type="text" name="username" required />
                    <ErrorMessage name="username" component="div" className="error" /> 
                </label>
                <label>
                    Password:
                    <Field type="password" name="password" required/>
                    <ErrorMessage name="password" component="div" className="error" /> 
                </label>
                <button type="submit">Login</button>
                <div>
                <Link to="/Registration"> Don't have an account? Click here </Link>
                </div>
        </form>
        )}
        </Formik>
    </div>
    </div>
    </div>
);
}



export default Login;