import React from "react";

export default function Slide1({formData, setFormData,formErrors}) {
  return (
    <>
      <div className="s1">
      <h1>Personal info</h1>
      <p> Please provide your name, email address, and phone number.</p>
      <div className="flex">
      <label htmlFor="Name">Name</label>
      {formErrors.Name && <span className="error">{formErrors.Name}</span>}
      </div>
      <input id="Name" type="text" placeholder="e.g. Stephen King" value={formData.Name} onChange={(e) =>{ setFormData({ ...formData,Name: e.target.value})}} />
      <div className="flex">
      <label htmlFor="Email"> Email Address</label>
      {formErrors.Name && <span className="error">{formErrors.Email}</span>}
      </div>
      <input id="Email" type="email" placeholder="e.g. stephenking@lorem.com" value={formData.Email} onChange={(e) =>{ setFormData({ ...formData,Email: e.target.value})}} />
      <div className="flex">
      <label htmlFor="Phone"> Phone Number</label>
      {formErrors.Name && <span className="error">{formErrors.Phone}</span>}
      </div>
      <input id="Phone" type="number" placeholder="e.g. +1 234 567 890" value={formData.Phone} onChange={(e) =>{ setFormData({ ...formData,Phone: e.target.value})}} />
      
      </div>
    
    </>
  );
}
