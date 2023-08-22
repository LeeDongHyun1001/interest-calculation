import React from "react";

const Form = ({ setUserInput }) => {
  const onReset = () => {
    setUserInput([]);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const caclulationResult = [];
    const inputCalculationInformation = {
      currentSavings: Number(e.target.currentSavings.value),
      yearlyContribution: Number(e.target.yearlyContribution.value),
      expectedReturn: Number(e.target.expectedInterest.value),
      duration: Number(e.target.duration.value),
    };
    let calcInfo = inputCalculationInformation;

    let totalSavings = calcInfo.currentSavings + calcInfo.yearlyContribution;
    let interest = calcInfo.expectedReturn;
    let day = new Date();
    let year = day.getFullYear();

    for (let i = 0; i <= calcInfo.duration; i++) {
      totalSavings = totalSavings + calcInfo.yearlyContribution;
      let totalInterest = Math.round(totalSavings * (interest / 100));
      let totalCapital = totalInterest + totalSavings;

      let result = {
        year: year + i,
        totalSavings: totalSavings,
        interest: interest,
        totalInterest: totalInterest,
        totalCapital: totalCapital,
      };
      totalSavings = totalCapital;
      caclulationResult.push(result);
    }
    setUserInput((prevInput) => (prevInput = caclulationResult));
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="currentSavings">현재 저축 금액(₩)</label>
          <input type="number" min="0" id="currentSavings" />
        </p>
        <p>
          <label htmlFor="yearlyContribution">연간 저축액(₩)</label>
          <input type="number" min="0" id="yearlyContribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedInterest">예상 이자 (%, 연 이자)</label>
          <input
            type="number"
            max="100"
            min="0"
            step="0.1"
            id="expectedInterest"
          />
        </p>
        <p>
          <label htmlFor="duration">저축기간 (연)</label>
          <input type="number" min="0" max="100" id="duration" />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={onReset}>
          초기화
        </button>
        <button type="submit" className="button">
          계산하기
        </button>
      </p>
    </form>
  );
};

export default Form;
