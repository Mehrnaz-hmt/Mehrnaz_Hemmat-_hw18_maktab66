import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { useFormik } from "formik";
import iranstates from "../../src/iranstates.json";

const FRegisterForm = ({
  values,
  setValues,
  showLoginForm,
  setShowLoginForm,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [data, setData] = useState([]);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const notRefresh = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <>
      <Form className="input-cont">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="first-last-input-cont">
            <Form.Control
              className="first-last-name"
              required
              type="text"
              placeholder="نام خانوادگی"
            />
            <Form.Control
              className="first-last-name"
              required
              type="text"
              placeholder="نام"
            />
          </div>

          <Form.Control
            className="form-ctrl-input-register-email"
            type="email"
            placeholder="پست الکترونیک"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
         
          
          <div className="education-cont">
            <DropdownButton
              variant="outline-secondary"
              title="محل تحصیل"
              required
              id="input-group-dropdown-1"
            >
              <Dropdown.Item className="education" href="#">
                دکتری
              </Dropdown.Item>
              <Dropdown.Item className="education" href="#">
                کارشناسی ارشد
              </Dropdown.Item>
              <Dropdown.Item className="education" href="#">
                کارشناسی
              </Dropdown.Item>
              <Dropdown.Item className="education" href="#">
                دیپلم
              </Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              required
              variant="outline-secondary"
              title="تحصیلات"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item className="education" href="#">
                دکتری
              </Dropdown.Item>
              <Dropdown.Item className="education" href="#">
                کارشناسی ارشد
              </Dropdown.Item>
              <Dropdown.Item className="education" href="#">
                کارشناسی
              </Dropdown.Item>
              <Dropdown.Item className="education" href="#">
                دیپلم
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="province-cont">
            <DropdownButton
              required
              variant="outline-secondary"
              title="شهر"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item className="education" value="" href="#">
                کارشناسی ارشد{" "}
              </Dropdown.Item>
              {/* {value.map((item) => {return <Dropdown.Item className="education" href="#" key={item}>{item}</Dropdown.Item>})} */}
              {/* {  data[province].map(city => <Dropdown.Item key={city} value={city}>{city}</Dropdown.Item>)} */}
              <Dropdown.Item className="education" href="#">
                کارشناسی
              </Dropdown.Item>
              <Dropdown.Item className="education" href="#">
                دیپلم
              </Dropdown.Item>
            </DropdownButton>
            (
            <DropdownButton
              required
              variant="outline-secondary"
              title="استان"
              id="input-group-dropdown-1"
            >
              {/* Object.keys(iranstates).map(key =>{" "}
            <Dropdown.Item key={key} value={key}>
              {key}
            </Dropdown.Item>
            ) */}
              {Object.keys(iranstates).map((key) => (
                <Dropdown.Item key={key} value={key}>
                  {key}
                </Dropdown.Item>
              ))}
              {/* {console.log(Object.keys(data))}
            {console.log(data)} */}
              {/* <Dropdown.Item className="education" href="#">
              تبریز
            </Dropdown.Item>
            <Dropdown.Item className="education" href="#">
              شیراز
            </Dropdown.Item> */}
            </DropdownButton>
          </div>
          
        </Form.Group>

        









        <Form.Group
          className="mb-3 forgot-cont"
          controlId="formBasicCheckbox"
        ></Form.Group>
        <p className="forgot">فراموش کردید؟</p>
        <Button onClick={notRefresh} className="btn-entry" type="submit">
          ورود
        </Button>
      </Form>
    </>
  );
};
export default FRegisterForm;
