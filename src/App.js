import { useState } from "react";
import styled from "styled-components";
import Display from "./object/Display.js";
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

  console.log(displayList);

  const submitData = (data) => {
    setDisplayList([...displayList, data]);
    setInputChk(false);
  };

  const submitStudentData = (data, teacherId, teacherClass) => {
    const findIndex = displayList.findIndex(
      (element) => element.id === teacherId && element.class === teacherClass
    );

    const copyList = [...displayList];
    if (findIndex !== -1) {
      const copyListCurPeople = [...copyList[findIndex].curPeople];
      copyListCurPeople.push(data);
      console.log(copyListCurPeople);

      copyList[findIndex] = {
        ...copyList[findIndex],
        curPeople: copyListCurPeople,
      };
    }

    setDisplayList(copyList);
  };

  const addDisplay = () => {
    setInputChk(!inputChk);
  };

  return (
    <Container>
      {displayList.map((_, i) => (
        <Display
          key={i}
          item={displayList[i]}
          submitStudentData={submitStudentData}
        />
      ))}
      {inputChk ? <Input submitData={submitData} /> : ""}
      <AddDisplay onClick={addDisplay}>{!inputChk ? "+" : "-"}</AddDisplay>
    </Container>
  );
};

export default App;
