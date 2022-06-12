import { useState } from "react";
import styled from "styled-components";

const Template = styled.div`
  height: 225px;
  background: #cff0cc;
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

const Class = styled.div`
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

const TutorName = styled.div`
  height: 40px;
  margin: 0;
  border: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

const TutorID = styled.div`
  height: 40px;
  margin: 0;
  border: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

const TextInput = styled.input`
  width: 200px;
  height: 1.5rem;
  font-size: 1.2rem;
  margin: 0;
  border: 0;
  padding: 5px 0 0 0;
  box-sizing: border-box;
`;

const Register = styled.div`
  width: 50px;
  height: 25px;
  margin: 30px 0 0 310px;
  border: 0;
  padding: 0;
  background-color: #023020;
  color: white;
  text-align: center;
  font-weight: bold;
  &:hover {
    background-color: white;
    color: #023020;
  }
`;

const Display = ({ item, submitStudentData }) => {
  const [regChk, setRegChk] = useState(false);
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    id: "",
  });

  const classRegister = () => {
    setRegChk(!regChk);

    if (!regChk) {
      setStudentInfo([]);
    }
  };

  const onChange = (e) => {
    setStudentInfo({
      ...studentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onKeyDown = (e) => {
    if (e.key !== "Enter") return;

    if (studentInfo.name !== "" && studentInfo.id !== "") {
      if (window.confirm("신청하시겠습니까?")) {
        if (item.curPeople.length >= item.hopePeople) {
          alert("모집이 마감되었습니다!");
        } else {
          submitStudentData(studentInfo, item.id, item.class);
          setRegChk(false);
        }
      }
    } else {
      alert("정보를 모두 입력하세요!");
    }
  };

  return (
    <Template>
      <Tuti>
        {item.name}({item.id.substring(2, 4)})
      </Tuti>
      <Class>
        &gt; {item.class} ({item.grade})
      </Class>
      <Tutors>
        &gt; 모집인원 ({item.curPeople.length || 0}/{item.hopePeople})
      </Tutors>
      {regChk ? (
        <>
          <TutorName>
            이름:{" "}
            <TextInput
              type="text"
              name="name"
              placeholder="모두 입력 후 ENTER"
              value={studentInfo.name || ""}
              onChange={onChange}
              onKeyDown={onKeyDown}
            />{" "}
          </TutorName>
          <TutorID>
            학번:{" "}
            <TextInput
              type="text"
              name="id"
              placeholder="모두 입력 후 ENTER"
              value={studentInfo.id || ""}
              onChange={onChange}
              onKeyDown={onKeyDown}
            />{" "}
          </TutorID>
        </>
      ) : (
        ""
      )}
      <Register
        onClick={classRegister}
        style={{ marginTop: !regChk ? "30px" : "-50px" }}
      >
        {!regChk ? "신청" : "취소"}
      </Register>
    </Template>
  );
};

export default Display;
