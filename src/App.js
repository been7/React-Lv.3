import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");

  const submitButtonHandler = () => {
    if (name === "" || price === "") {
      alert("이름과 가격 모두 입력해주세요.");
    } else {
      alert(`{name: ${name}, price: ${price}}`);
    }
  };

  return (
    <Container>
      <div>
        <h1>Button</h1>
        <LargePrimaryButton>Large Primary Button</LargePrimaryButton>
        <button>Medium</button>
        <button>Small</button>
        <button>Large Negative Button</button>
        <button>Medium</button>
        <button>Small</button>
      </div>
      <div>
        <h1>Input</h1>
        <label>이름</label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>가격</label>
        <input
          type="text"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <button onClick={submitButtonHandler}>저장</button>
      </div>
      <div>
        <h1>Modal</h1>
        <div>
          <button>open modal</button>
        </div>
        <button>open modal</button>
      </div>
      <div>
        <h1>Select</h1>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px;
`;

const LargePrimaryButton = styled.button`
  border-color: aqua;
  background-color: transparent;
`;

export default App;
