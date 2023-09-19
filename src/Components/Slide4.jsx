import React, { useEffect, useState } from 'react';

function Slide4({ formData, setFormData , setPage }) {
  let plan = 0;
  let total = 0;
  let subscription = formData.Duration.side;
  if (formData.Selected?.Arcade) {
    plan = 9;
  }
  if (formData.Selected?.Advanced) {
    plan = 12;
  }
  if (formData.Selected?.Pro) {
    plan = 15;
  }

  if (subscription) {
    total = plan * 10;
    if (formData.Addons.service === true) {
      total += 10;
    }
  
    if (formData.Addons.storage === true) {
      total += 20;
    }
  
    if (formData.Addons.profile === true) {
      total += 20;
    }
  }

  if (!subscription) {
    total = plan;
    if (formData.Addons.service === true) {
      total += 1;
    }
  
    if (formData.Addons.storage === true) {
      total += 2;
    }
  
    if (formData.Addons.profile === true) {
      total += 2;
    }
  }
 

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      Total: total,
    }));
  }, [total, setFormData]);
const handleClick = ()=>{
  setPage(1)
} 
console.log(plan);


  return (
    <div className='s4'>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="finish">
        <div className="bg">
        <div className="first">
            <div className="step1">
            <div><h4>{formData.Plan.name} ({formData.Duration.period})</h4>
          <a className='change' onClick={handleClick} >Change</a></div>
            </div>
            <p className="cl">{!subscription ? `+$${plan}/mo` : `+$${plan*10}/yr`}</p>
        </div>
        {
          formData.Addons.service && (
            <div className="step2">
          <div>
            <p>Online service</p>
          </div>
          <p className="cl">{!subscription ? "+$1/mo" : "+10/yr"}</p>
        </div>
          )
        }
        {
          formData.Addons.storage && (
            <div className="step2">
          <div>
            <p>Larger storage</p>
          </div>
          <p className="cl">{!subscription ? "+$2/mo" : "+20/yr"}</p>
        </div>
          )
        }
         {
          formData.Addons.profile && (
            <div className="step2">
          <div>
            <p>Customizable Profile</p>
          </div>
          <p className="cl">{!subscription ? "+$2/mo" : "+20/yr"}</p>
        </div>
          )
        }
        </div>
        <div className="total">
                <div><p className='fw'>Total (per {!subscription ? "month" : "year"})</p></div>
                <p className="cost">${total}/{!subscription ? "mo" : "yr"}</p>
            </div>
      </div>
     
    </div>
    )
}

export default Slide4