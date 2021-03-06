import { useState } from "react";
import styled from "styled-components";

const InputDisplay = styled.div`
  height: 225px;
  background: white;
  border: 1px solid black;
  padding: 12.5px 10px 12.5px 20px;
  box-sizing: border-box;
`;

const Tuti = styled.div`
  height: 60px;
  margin: 0;
  border: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: bold;
`;

const ID = styled.div`
  height: 40px;
  margin: 0;
  border: 0;
  padding: 0;
  font-size: 1.2rem;
`;

const Class = styled.div`
  height: 40px;
  margin: 0;
  border: 0;
  padding: 0;
  font-size: 1.2rem;
`;

const Grade = styled.div`
  height: 40px;
  margin: 0;
  border: 0;
  padding: 0;
  font-size: 1.2rem;
`;

const Tutors = styled.div`
  height: 40px;
  margin: 0;
  border: 0;
  padding: 0;
  font-size: 1.2rem;
`;

const Register = styled.div`
  width: 50px;
  height: 25px;
  margin: -50px 0 0 310px;
  border: 0;
  padding: 0;
  background-color: black;
  color: white;
  text-align: center;
  font-weight: bold;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const BigTextInput = styled.input`
  width: 200px;
  height: 2.5rem;
  font-size: 2rem;
  margin: 0;
  border: 0;
  padding: 4px 0 0 0;
  box-sizing: border-box;
`;

const TextInput = styled.input`
  width: 250px;
  height: 1.5rem;
  font-size: 1.2rem;
  margin: 0;
  border: 0;
  padding: 5px 0 0 0;
  box-sizing: border-box;
`;

const TextSelect = styled.select`
  width: 220px;
  height: 1.5rem;
  font-size: 1.2rem;
  margin: 0;
  border: 0;
  padding: 2px 0 0 0;
  box-sizing: border-box;
`;

const NumberInput = styled.input`
  width: 50px;
  height: 1.5rem;
  font-size: 1.2rem;
  margin: 0;
  border: 0;
  padding: 5px 0 0 0;
  box-sizing: border-box;
`;

const Input = ({ submitData }) => {
  const [info, setInfo] = useState({
    name: "",
    id: "",
    class: "",
    grade: "",
    curPeople: [],
    hopePeople: 0,
  });

  const onChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    if (
      info.name !== "" &&
      info.id !== "" &&
      info.class !== "" &&
      info.grade !== "" &&
      info.hopePeople > 0
    ) {
      submitData(info);
    } else {
      alert("????????? ?????? ???????????????!");
    }
  };

  return (
    <InputDisplay>
      <Tuti>
        ??????:{" "}
        <BigTextInput
          type="text"
          name="name"
          value={info.name || ""}
          onChange={onChange}
        />
      </Tuti>
      <ID>
        ??????:{" "}
        <TextInput
          type="text"
          name="id"
          value={info.id || ""}
          onChange={onChange}
        />
      </ID>
      <Class>
        ??????:{" "}
        <TextSelect name="class" value={info.class} onChange={onChange}>
          <option value="">????????? ???????????????????</option>
          <option value="????????????????????????">????????????????????????????</option>
          <option value="????????????(1)">????????????(1)????</option>
        </TextSelect>
      </Class>
      <Grade>
        ??????:{" "}
        <TextSelect name="grade" value={info.grade} onChange={onChange}>
          <option value="">????????? ???????????????????</option>
          <option value="A+">A+</option>
          <option value="A0">A0</option>
        </TextSelect>
      </Grade>
      <Tutors>
        ????????????:{" "}
        <NumberInput
          type="number"
          name="hopePeople"
          value={info.hopePeople}
          onChange={onChange}
        />
      </Tutors>
      <Register onClick={submit}>??????</Register>
    </InputDisplay>
  );
};

export default Input;
