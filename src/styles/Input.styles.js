import styled from "styled-components";


const Input = styled.input`
  width: 400px;
  height: 50px;
  background-color: #eee;
  border-radius: 5px;
  border: 1px solid #ddd;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export default Input;
