import React, { useState } from "react";
import "./Registration.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { StringLiteral } from "typescript";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { registerUser } from "../../features/authSlice";
import { RootState } from "../../redux/store";
import axios, { AxiosResponse } from "axios";

interface RegistrationValues {
  email: string;
  username: string;
  password: string;
}

const alphanumericRegex = /^[a-zA-Z0-9_]*$/;

// const checkEmail = (email: string): Promise<AxiosResponse<{ exists: boolean }>> => {
//   return axios.get(`http://localhost:8080/api/auth/check-email/${email}`);
// };

//Yup validation schema to be applied to our formik form
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("email is required")
  .test('unique-email', 'Email is already taken', async (value) => {
    const response = await axios.get(`http://localhost:4798/api/auth/check-email/${value}`);
    return !response.data; 
  }),
 

  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(15, "Must be no more than 15 characters")
    .matches(
      alphanumericRegex,
      "Only alphanumeric characters and underscores are allowed"
    )
    .required("Username is required")
    .test('unique-username', 'Username is already taken', async (value) => {
      const response = await axios.get(`http://localhost:4798/api/auth/check-username/${value}`);
      return response.data; 
    }),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

const Registration: React.FC = () => {
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state: RootState) => state.auth);

  const initialValues: RegistrationValues = {
    email: "",
    username: "",
    password: "",
  };

  const navigate = useNavigate();
  const handleSubmit = async (
    values: RegistrationValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const res = await dispatch(registerUser(values)).unwrap();

      if (res.httpStatus > 299 || res.httpStatus < 200) {
        // set errors here
        console.error(res);
      } else {
        // successfully registered so navigate user to login
        navigate("/login");
      }
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);                                                                                                                                                                                                                                                                                                                            
    }
    
  };

  return (
    <div className="background">
      <div className="container">
        <div className="card">
          <h2>Gambler Signup</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <label>
                  Email:
                  <Field type="email" name="email" required />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </label>
                <label>
                  Username:
                  <Field type="text" name="username" required />
                  <ErrorMessage
                    name="username"
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
                <label>
                  Confirm Password:
                  <Field
                    type="password"
                    name="passwordConfirmation"
                    required
                  />
                  <ErrorMessage
                    name="passwordConfirmation"
                    component="div"
                    className="error"
                  />
                </label>
                <button type="submit" className="registration-button">
                  Register
                </button>

                <div>
                  {" "}
                  {/*this is here to get block type*/}
                  <Link to="/Login"> Already have an account? Click here </Link>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Registration;
