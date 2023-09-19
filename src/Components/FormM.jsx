import React, { useState } from "react";
import Mside from "./Mside";
import "../App.css";
import Slides from "./Slides";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";

function Form() {
  const [page, setPage] = useState(0);

  const Next = () => {
    const isValid = validateForm();
  
    if (isValid) {
      setPage((currentPage) => currentPage + 1);
    }
  };
  
  const Back = () => {
    setPage((curentPage) => curentPage - 1);
  };
  const confirm = () => {
    const isValid = validateForm();
  
    if (isValid) {
      setPage(4);
    }
  };
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Plan: {
      name: "",
      price: 0,
    },
    Duration: {
      period: "monthly",
      side: false,
    },
    Addons: {
      service: false,
      storage: false,
      profile: false,
    },
    Total: 0,
    Selected: {
      Arcade: false,
      Advanced: false,
      Pro: false,
    },
  });
  const validationRules = {
    Name: (value) => value.trim() !== "",
    Email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    Phone: (value) => /^[0-9]{10}$/.test(value),
  };
  const [formErrors, setFormErrors] = useState({
    Name: "",
    Email: "",
    Phone: "",
  });
  
  const [isFormValid, setIsFormValid] = useState(false);
  const validateForm = () => {
    let isValid = true;
    const errors = { ...formErrors };
  
    for (const field in formData) {
      if (validationRules[field]) {
        const isValidField = validationRules[field](formData[field]);
        if (!isValidField) {
          isValid = false;
          errors[field] = `${field} is required.`; 
        } else {
          errors[field] = "";
        }
      }
    }
  
    setFormErrors(errors);
    setIsFormValid(isValid);
  
    return isValid;
  };
  
  
  

  const MyPage = () => {
    if (page === 0) {
      return <Slide1 formData={formData} setFormData={setFormData} formErrors={formErrors}></Slide1>;
    }
    if (page === 1) {
      return <Slide2 formData={formData} setFormData={setFormData}></Slide2>;
    }
    if (page === 2) {
      return <Slide3 formData={formData} setFormData={setFormData}></Slide3>;
    }
    if (page === 3) {
      return (
        <Slide4
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        ></Slide4>
      );
    }
    if (page === 4) {
      return (
        <Slide5
        ></Slide5>
      );
    }
  };
  const isActive = () => {
    if (page === 0) {
      return (
        <div className="buttons">
          <button onClick={Next} className="btn next">
            Next Step
          </button>
        </div>
      );
    }
    if (page === 3) {
      return (
        <div className="buttons">
          <div>
            <button onClick={confirm} className="btn next">
              Confirm
            </button>
          </div>
          <div>
            <button onClick={Back} className="btn back">
              Go Back
            </button>
          </div>
        </div>
      );
      
    }
    if (page === 4) {
      return (
        <>
        </>
      );
    }else {
      return (
        <div className="buttons">
          <div>
            <button onClick={Next} className="btn next">
              Next Step
            </button>
          </div>
          <div>
            <button onClick={Back} className="btn back">
              Go Back
            </button>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="form">
      <div className="sides" action="">
        <Mside page={page}></Mside>
        <Slides isActive={isActive} MyPage={MyPage}></Slides>
      </div>
    </div>
  );
}

export default Form;
