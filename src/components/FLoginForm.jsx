import React from "react";
import { Formik } from "formik";
import { Button, Form, Container } from "react-bootstrap";

const LoginForm = () => (
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
      // onSubmit={(values, { setSubmitting }) => {
      //   setTimeout(() => {
      //     alert(JSON.stringify(values, null, 2));
      //     setSubmitting(false);
      //   }, 400);
      // }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
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
          <Container style={{ width: "750px" }} className="form-cont">
            <div className="button-cont">
              <Button className="btn-top-register" type="submit">
                ثبت نام
              </Button>

              <Button className="btn-top-login" type="submit">
                ورود
              </Button>
            </div>

            <h2>خوش آمدید</h2>
            <Form className="input-cont">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
               
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
          </Container>

          <input
           
          />
          {errors.email && touched.email && errors.email}
          <input
            
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
