import React, { useState } from "react";
import Form from "./components/userInput/Form";
import Result from "./components/resultTable/Result";
import StartPage from "./components/startPage/StartPage";

function App() {
  const [userInput, setUserInput] = useState([]);
  const [start, setStart] = useState(false);
  return (
    <div>
      <StartPage start={start} setStart={setStart}></StartPage>
      <header className="header">
        <h1>저축 계산기</h1>
      </header>
      <Form setUserInput={setUserInput}></Form>
      <Result userInput={userInput}></Result>
    </div>
  );
}

export default App;
