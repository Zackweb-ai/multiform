import React, { useState } from "react";

function Checkbox({ label, checked, onChange }) {
  return (
    <div className="display">
      <div className="checkbox">
        <input
          checked={checked}
          onChange={onChange}
          type="checkbox"
        />
      </div>
      <div>
        <h4>{label}</h4>
        <p>{label === "Online service" ? "Access to multiplayer games" : `Extra 1TB of ${label.toLowerCase()}`}</p>
      </div>
    </div>
  );
}

function Slide3({ formData, setFormData }) {
  const [subscription] = useState(formData.Duration.side);

  const handleCheckboxChange = (addonName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      Addons: {
        ...prevFormData.Addons,
        [addonName]: !prevFormData.Addons[addonName],
      },
    }));
  };

  return (
    <div className="s3">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="add-ons">
        <div className="add">
          <Checkbox
            label="Online service"
            checked={formData.Addons.service}
            onChange={() => handleCheckboxChange("service")}
          />
          <p className="cost">{!subscription ? "+$1/mo" : "+$10/yr"}</p>
        </div>
        <div className="add">
          <Checkbox
            label="Larger storage"
            checked={formData.Addons.storage}
            onChange={() => handleCheckboxChange("storage")}
          />
          <p className="cost">{!subscription ? "+$2/mo" : "+$20/yr"}</p>
        </div>
        <div className="add">
          <Checkbox
            label="Customizable Profile"
            checked={formData.Addons.profile}
            onChange={() => handleCheckboxChange("profile")}
          />
          <p className="cost">{!subscription ? "+$2/mo" : "+$20/yr"}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide3;
