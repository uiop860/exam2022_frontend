import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  height: fit-content;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  /* flex-wrap: wrap; */
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "wrap")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "2"}rem;
`;

export default FlexRow;
