import React, { useEffect, useState } from "react";
import plan1 from "../assets/images/icon-arcade.svg";
import plan2 from "../assets/images/icon-advanced.svg";
import plan3 from "../assets/images/icon-pro.svg";

function Slide2({ formData, setFormData }) {
  const [isSelected, setIsSelected] = useState({
    Arcade: formData.Selected.Arcade,
    Advanced: formData.Selected.Advanced,
    Pro: formData.Selected.Pro,
  });

  const handleChange = () => {
    const updatedIsChecked = !checkboxChecked;
    console.log("Updated isChecked:", updatedIsChecked);
    setFormData((prevFormData) => ({
      ...prevFormData,
      Duration: {
        ...formData.Duration,
        period: !updatedIsChecked ? "monthly" : "yearly",
        side: updatedIsChecked,
      },
    }));
  };

  const handleSelection = (First, Second, Third) => {
    setIsSelected({
      [First]: true,
      [Second]: false,
      [Third]: false,
    });
    setFormData((prevFormData) => ({
      ...prevFormData,
      Plan: { ...prevFormData.Plan, name: First },
      Selected: {
        ...prevFormData.Selected,
        [First]: true,
        [Second]: false,
        [Third]: false,
      },
    }));
  };

  const [checkboxChecked, setCheckboxChecked] = useState(false);
  useEffect(() => {
    setCheckboxChecked(formData.Duration.side);
  }, [formData.Duration.side]);


  return (
    <div className="s2">
      <h1>Select your plan</h1>
      <p className="pp">You have the option of monthly or yearly billing.</p>
      <div className="plans">
        <div
          className={`option ${isSelected.Arcade ? "selected" : ""}`}
          onClick={() => {
            handleSelection("Arcade", "Advanced", "Pro");
          }}
        >
          <img src={plan1} alt="" />
          <div className="ps">
          <h3>Arcade</h3>
          <p>{!checkboxChecked ? "$9/mo" : "$90/yr"}</p>
          </div>
        </div>
        <div
          className={`option ${isSelected.Advanced ? "selected" : ""}`}
          onClick={() => {
            handleSelection("Advanced", "Arcade", "Pro");
          }}
        >
          <img src={plan2} alt="" />
          <div className="ps">
          <h3>Advanced</h3>
          <p>{!checkboxChecked ? "$12/mo" : "$120/yr"}</p>
          </div>
        </div>
        <div
          className={`option ${isSelected.Pro ? "selected" : ""}`}
          onClick={() => {
            handleSelection("Pro", "Arcade", "Advanced");
          }}
        >
          <img src={plan3} alt="" />
          <div className="ps">
          <h3>Pro</h3>
          <p>{!checkboxChecked ? "$15/mo" : "$150/yr"}</p>
          </div>
        </div>
      </div>
      <div className="subs">
        <div className="sub">
          <p className={`${!checkboxChecked ? "AddColor" : ""}`}>Monthly</p>
        </div>
        <label className="switch">
          <input
            onChange={handleChange}
            checked={checkboxChecked}
            type="checkbox"
          />
          <span className="slider round"></span>
        </label>
        <div className="sub">
          <p className={`${checkboxChecked ? "AddColor" : ""}`}>Yearly</p>
        </div>
      
      </div>
    </div>
  );
}

export default Slide2;
