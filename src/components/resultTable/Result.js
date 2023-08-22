import React from "react";

const Result = ({ userInput }) => {
  return (
    <>
      {userInput.length == 0 ? (
        <h3 style={{ textAlign: "center" }}>아직 계산하지 않았습니다</h3>
      ) : (
        <table className="result">
          <thead>
            <tr>
              <th>연도</th>
              <th>저축 금액</th>
              <th>이율 (연)</th>
              <th>총 이자</th>
              <th>최종 투자 금액</th>
            </tr>
          </thead>
          <tbody>
            {userInput.map((element) => {
              return (
                <tr key={element.year}>
                  <td>{element.year}</td>
                  <td>{element.totalSavings} 원</td>
                  <td>{element.interest} %</td>
                  <td>{element.totalInterest} 원</td>
                  <td>총 {element.totalCapital} 원</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Result;
