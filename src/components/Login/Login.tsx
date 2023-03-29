import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginUser } from "../../features/authSlice";
import { RootState } from "../../redux/store";
import { FormikErrors, FormikHelpers } from "formik";

interface LoginValues {
  email: string;
  password: string;
}
const alphanumericRegex = /^[a-zA-Z0-9_]*$/;

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("email is required"),

  password: Yup.string()
    .min(6, "Too short, no password will match")
    .required("Password is required"),
});

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state: RootState) => state.auth);
  console.log(auth);

  const initialValues: LoginValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const handleSubmit = async (
    values: LoginValues,
    { setSubmitting, setErrors }: { setSubmitting: (isSubmitting: boolean) => void, setErrors: (errors: { [field: string]: string}) => void }
  ) => {
    try {
      console.log(`Email: ${values.email}, Password: ${values.password}`);
      const res = await dispatch(loginUser(values)).unwrap();
      if (res.accessToken) {
        // successful login so navigate user here
        navigate("/app");
      } else {
        // set errors here
        console.log(res);

        setErrors({email: 'Invalid email or password', password: 'Invalid email or password'});
        
      }
      setSubmitting(false);

    } catch (error) {

      console.error(error);

      setErrors({_error: 'Something went wrong with logging in'});
      
      setSubmitting(false);
    }
    console.log("testing!")
  };

  
  return (
    <div className="background">
      <div className="container">
        <div className="card">
          <h2>Gambler Login</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <label>
                  Email:
                  <Field type="text" name="email" required />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </label>
                <label>
                  Password:
                  <Field type="password" name="password" required />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </label>
                <button type="submit" className="login-button">
                  Login
                </button>
                <div>
                  <Link to="/Registration">
                    {" "}
                    Don't have an account? Click here{" "}
                  </Link>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
