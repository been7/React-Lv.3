import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App(props) {
  // Input
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");

  const submitButtonHandler = () => {
    if (name === "" || price === "") {
      alert("이름과 가격 모두 입력해주세요.");
    } else {
      alert(`{name: ${name}, price: ${price}}`);
    }
  };

  // Select
  const selectList = ["리액트", "자바", "스트링", "리액트 네이티브"];
  const [selected, setSelected] = useState("");

  const handleSelect = (event) => {
    console.log(event);
    setSelected(event.target.value);
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
      <SelectBox>
        <h1>Select</h1>
        <select>
          <option>리액트</option>
          <option>자바</option>
          <option>스프링</option>
          <option>리액트 네이티브</option>
        </select>
        <Select>
          <option>리액트</option>
          <option>자바</option>
          <option>스프링</option>
          <option>리액트 네이티브</option>
        </Select>
      </SelectBox>
    </Container>
  );
}

// 스타일 컴포넌트
const Container = styled.div`
  padding: 30px;
`;

const LargePrimaryButton = styled.button`
  border-color: aqua;
  background-color: transparent;
`;

const SelectBox = styled.div`
  border: 1px solid gray;
  margin-top: 30px;
  padding-bottom: 30px;
  position: relative;
  z-index: 2;
`;

const Select = styled.select`
  position: relative;
  z-index: 1;
`;

export default App;
