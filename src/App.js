import "./App.css";
import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import FLoginForm from "./components/FLoginForm";
import FRegisterForm from "./components/FRegisterForm";

function App() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [showLoginForm, setShowLoginForm] = useState(false);

  const [tab, setTab] = useState("login");

  return (
    <div className="App">
      <Container style={{ width: "750px" }} className="form-cont">
        <div className="button-cont">
          <Button
            className="btn-top-register"
            type="submit"
            onClick={() => setTab("register")}
          >
            ثبت نام
          </Button>

          <Button
            className="btn-top-login"
            type="submit"
            onClick={() => setTab("login")}
          >
            ورود
          </Button>
        </div>

        {tab == "login" ? <FLoginForm /> : <FRegisterForm />}
      </Container>
    </div>
  );
}
export default App;
