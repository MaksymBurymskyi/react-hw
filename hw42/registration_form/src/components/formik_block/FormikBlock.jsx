// import React, { Component } from "react";
import "./FormikBlock.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormikBlock = () => (
  <Formik
    initialValues={{ name: "", email: "", password: "" }}
    validate={(values) => {
      const errors = {};
      
      if(!values.name) {
        errors.name = "Required";
      } else if (values.name.length < 2) {
        errors.name = "too short name";        
      } else if (/\d+/g.test(values.name)) {
        errors.name = 'only alphabets allowed';
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 4) {
        errors.password = "too short password";        
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log('data: ', JSON.stringify(values, null, 2));
        setSubmitting(false);
        alert("Дані успішно надіслано")
      }, 800);
    }}>
    {({ isSubmitting }) => (
      <Form className="formBlock__form">
        <label htmlFor="name">Name</label>
        <Field
          className="formBlock__inpField"
          type="text"
          name="name"
          id="name"
        />
        <ErrorMessage name="name" component="div" />
        <label htmlFor="email">Email</label>
        <Field
          className="formBlock__inpField"
          type="email"
          name="email"
          id="email"
        />
        <ErrorMessage name="email" component="div" />
        <label htmlFor="password">Password</label>
        <Field
          className="formBlock__inpField"
          type="password"
          name="password"
          id="password"
        />
        <ErrorMessage name="password" component="div" />

        <button
          className="formBlock__submitBtn"
          type="submit"
          disabled={isSubmitting}>
          Create Account
        </button>
        <button className="formBlock__signUpBtn" type="button">
          Sign up with Google
        </button>
      </Form>
    )}
  </Formik>
);

export default FormikBlock;
