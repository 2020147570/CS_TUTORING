import styled from "styled-components";

const Display = styled.div`
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

const DisplayList = (props) => {
  const displayList = props.displayList;
  return (
    <>
      {displayList.map((item, i) => (
        <Display key={i}>
          <Tuti>
            {item.name}({item.id.substring(2, 4)})
          </Tuti>
          <Class>
            &gt; {item.class} ({item.grade})
          </Class>
          <Tutors>
            &gt; 모집인원 ({item.curPeople || 0}/{item.hopePeople})
          </Tutors>
          <Register>신청</Register>
        </Display>
      ))}
    </>
  );
};

export default DisplayList;
