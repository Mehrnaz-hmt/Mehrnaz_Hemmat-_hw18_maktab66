import React from "react";
import { useEffect, useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import {
  Button,
  Form,
  Container,
  Dropdown,
  DropdownMenu,
  DropdownButton,
} from "react-bootstrap";
import iranstates from "../../src/iranstates.json";

const RegisterForm = ({
  values,
  setValues,
  showLoginForm,
  setShowLoginForm,
}) => {
  //states
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
    
    </>
  );
};
export default RegisterForm;
