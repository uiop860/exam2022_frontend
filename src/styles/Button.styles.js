import styled from "styled-components";

const Button = styled.button`
  background-color: hsl(var(--primary-color));
  color: #fff;
  font-size: var(--fs-400);
  padding: 8px 10px;

  /* height: 50px; */
  border: 0;
  border-radius: 5px;
  width: ${(props) => (props.width ? props.width : "150")}px;
  cursor: pointer;
  box-sizing: border-box;
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;

export default Button;
