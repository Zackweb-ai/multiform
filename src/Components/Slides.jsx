function Slides({ MyPage, isActive }) {
  return (
    <>
      <div className="info">{MyPage()}</div>
      {isActive()}
    </>
  );
}

export default Slides;
