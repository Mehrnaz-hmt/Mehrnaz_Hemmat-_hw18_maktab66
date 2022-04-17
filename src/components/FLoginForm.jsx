import React, { useEffect} from "react";
import { Formik } from "formik";
import { Button, Form, Container } from "react-bootstrap";
import axios from "axios";

const LoginForm = () => {

  useEffect(() => {
    axios.get("http://localhost:3000").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div>
      <Formik
      
      
        initialValues={{ email: "پست الکترونیک", password: "رمز عبور" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        // onSubmit={(values) => {
        //   alert(JSON.stringify(values, null, 2));
        // }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
       
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <h2 style={{ textAlign: "right" }}>خوش آمدید</h2>
            <Form className="input-cont">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                // onChange={getUserValue}

                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="form-ctrl-input"
                  type="email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="form-ctrl-input"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                
                />
              </Form.Group>
              <Form.Group
                className="mb-3 forgot-cont"
                controlId="formBasicCheckbox"
              >
                <p className="forgot">فراموش کردید؟</p>
              </Form.Group>
              <Button className="btn-entry" type="submit">
                ورود
              </Button>
            </Form>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;