import styled from "styled-components";

const Dropdown = styled.select`
  text-align: center;
  font-size: var(--fs-400);
  width: 150px;
  cursor: pointer;
  padding: 8px 10px;
  outline: 0;
  border: 0px solid #000000;
  border-radius: 5px;

  background: hsl(var(--primary-color));
  color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;

  -ms-expand {
    display: none;
  }
`;

export default Dropdown;
