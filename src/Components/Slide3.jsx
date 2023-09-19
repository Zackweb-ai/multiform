import React, { useState } from "react";

function Slide3({ formData, setFormData }) {

  const [isChecked, setIsChecked] = useState(formData.Addons.service);
  const [isChecked2, setIsChecked2] = useState(formData.Addons.storage);
  const [isChecked3, setIsChecked3] = useState(formData.Addons.profile);
  let subscription = formData.Duration.side;


  const handleCheckboxChange1 = () => {
    const updatedIsChecked = !isChecked;
    setIsChecked(updatedIsChecked);

    setFormData((prevFormData) => ({
      ...prevFormData,
      Addons: { ...prevFormData.Addons, service: updatedIsChecked },
    }));
  };
  const handleCheckboxChange2 = () => {
    const updatedIsChecked2 = !isChecked2;
    setIsChecked2(updatedIsChecked2);

    setFormData((prevFormData) => ({
      ...prevFormData,
      Addons: { ...prevFormData.Addons, storage: updatedIsChecked2 },
    }));
  };
  const handleCheckboxChange3 = () => {
    const updatedIsChecked3 = !isChecked3;
    setIsChecked3(updatedIsChecked3);

    setFormData((prevFormData) => ({
      ...prevFormData,
      Addons: { ...prevFormData.Addons, profile: updatedIsChecked3 },
    }));
  };

  return (
    <div className="s3">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="add-ons">
        <div className="add">
          <div className="display">
            <div className="checkbox">
              <input
                checked={formData.Addons.service}
                onChange={handleCheckboxChange1}
                type="checkbox"
                name="add-on-1"
                id="add-on-1"
              />
            </div>
            <div>
              <h4>Online service</h4>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <p className="cost">{!subscription ? "+$1/mo" : "+$10/yr"}</p>
        </div>
        <div className="add">
          <div className="display">
            <div className="checkbox">
              <input
                checked={formData.Addons.storage} 
                onChange={handleCheckboxChange2}
                type="checkbox"
                name="add-on-2"
                id="add-on-2"
              />
            </div>
            <div>
              <h4>Larger storage</h4>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <p className="cost">{!subscription ? "+$2/mo" : "+20/yr"}</p>
        </div>
        <div className="add">
          <div className="display">
            <div className="checkbox">
              <input
                checked={formData.Addons.profile} 
                onChange={handleCheckboxChange3}
                type="checkbox"
                name="add-on-3"
                id="add-on-3"
              />
            </div>
            <div>
              <h4>Customizable Profile</h4>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <p className="cost">{!subscription ? "+$2/mo" : "+20/yr"}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide3;
