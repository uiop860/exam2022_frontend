import styled from "styled-components";

export const BlackBar = styled.div`
  display: flex;
  background-color: hsl(var(--primary-color));
  flex: 1 1 content;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 4rem;
  a {
    color: white;
  }
  .active {
    color: hsl(var(--secondary-color));
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  width: 100%;
  height: 100%;

  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-around;
    height: 100%;
  }
`;

export const Menu = styled.h3`
  display: flex;
  align-items: center;
  height: 50%;
  gap: 1rem;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  width: 1px;
  background-color: #fff;
  height: 80%;
`;
