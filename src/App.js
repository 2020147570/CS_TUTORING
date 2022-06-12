import { useState } from "react";
import styled from "styled-components";
import DisplayList from "./object/DisplayList.js";
import Input from "./object/Input.js";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  row-gap: 2rem;
  column-gap: 3rem;
  padding: 2rem 0 0 3rem;
`;

const AddDisplay = styled.div`
  width: 40px;
  height: 40px;
  margin: 185px 0 0 0;
  background: #cff0cc;
  font-size: 25px;
  text-align: center;
  border-radius: 40%;
  font-weight: bold;
  color: white;
  &:hover {
    color: black;
  }
`;

const App = () => {
  const [displayList, setDisplayList] = useState([]);
  const [inputChk, setInputChk] = useState(false);

  const submitData = (data) => {
    setDisplayList([...displayList, data]);
    setInputChk(false);
  };

  const addDisplay = () => {
    setInputChk(!inputChk);
  };

  return (
    <Container>
      <DisplayList displayList={displayList} />
      {inputChk ? <Input submitData={submitData} /> : ""}
      <AddDisplay onClick={addDisplay}>{!inputChk ? "+" : "-"}</AddDisplay>
    </Container>
  );
};

export default App;
