import React from 'react';
import img from '../assets/images/bg-sidebar-desktop.svg';
import mobimg from '../assets/images/bg-sidebar-mobile.svg'

function Side(props) {
  const { page } = props;

  return (
    <div className='side'>
      <img className="position" src={img} alt="sideImage" />
      <img className="mobimg" src={mobimg} alt="sideImage" />
      <div className="steps">
        <Step num={1} title="YOUR INFO" currentPage={page} />
        <Step num={2} title="SELECT PLAN" currentPage={page} />
        <Step num={3} title="ADD-ONS" currentPage={page} />
        <Step num={4} title="SUMMARY" currentPage={page} isThankYou={page === 4} />
      </div>
    </div>
  );
}

function Step(props) {
  const { num, title, currentPage, isThankYou } = props;
  const isActive = num === (currentPage + 1);

  return (
    <div className="st">
      <p className={`num ${isActive ? 'backg' : ''}${isThankYou && num === 4 ? 'backg' : ''}`}>{num}</p>
      <div className="inf">
        <p className='stp'>{`STEP ${num}`}</p>
        <h3 className='tit'>{title}</h3>
      </div>
    </div>
  );
}

export default Side;
