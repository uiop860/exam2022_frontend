import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex:0 0 content;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  gap: 20px;
  width: fit-content;
  height: fit-content;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  @media(max-width: 500px){
    width: 100%;
  }
`;

export default Container;