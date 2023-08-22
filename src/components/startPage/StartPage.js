import React from "react";

const StartPage = ({ start, setStart }) => {
  const startBtnClickHandler = () => {
    setStart(true);
  };
  return (
    <div className={start ? "start start-page" : "start-page"}>
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
        은행 저축 계산기
      </h2>
      <div>
        <p>어려운 이자 계산! 이제 간편하게 계산 시작해볼까요?</p>
        <button onClick={startBtnClickHandler}>시작하기</button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6082/6082426.png"
          alt="저축 이미지"
        />
      </div>
    </div>
  );
};

export default StartPage;
