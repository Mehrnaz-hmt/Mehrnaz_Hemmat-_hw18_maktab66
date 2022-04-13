import "./App.css";
import { Formik } from 'formik';
import React, { useState } from "react";
import FLoginForm from "./components/FLoginForm";
import FRegisterForm from './components/FRegisterForm';

function App() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [showLoginForm, setShowLoginForm] = useState(false);

  
  return (
    <div className="App">
       <FRegisterForm
        setShowLoginForm={setShowLoginForm}
        showLoginForm={showLoginForm}
        values={values}
        setValues={setValues}
      />
     
<FLoginForm showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} />
     {/* <FRegisterForm/>  */}
    </div>
    // {
    //   data && data.length>0 && data.map((item)=><p>{item.about}</p>)
    // }
  );
}
export default App;
