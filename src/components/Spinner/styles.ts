import styled from "styled-components";

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;

  top: 0;
  left: 0;

  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme["bg-spinner"]};

`;
