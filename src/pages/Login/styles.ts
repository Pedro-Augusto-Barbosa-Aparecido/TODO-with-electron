import styled from "styled-components";

export const LoginContainer = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;

  flex-direction: row;

  justify-content: center;
  align-items: center;

`;

export const Form = styled.form`
  /* width: 50%; */

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  div {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: flex-start;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    width: 400px;

    input {
      width: 100%;
      height: 48px;

      padding: 6px;
      border-radius: 6px;

      border: 0;

      background-color: ${props => props.theme["gray-800"]};
      margin-top: 10px;

    }

  }

`;

export const ImageContainer = styled.div`
  display: none;

  height: calc(100vh);
  position: relative;
  z-index: -999;

  filter: blur(2px);

  box-shadow: inset 0px 33px 25px 0 #000, 
            inset 0 66px 15px 0px #ccc,
            inset 0 99px 5px 0px #fff;

  @media (min-width: 1280px) {
    display: flex !important;
    flex: 2;

  }

  img {
    width: 100%;

  }

`;

export const FormContainer = styled.div`
  display: flex;
  flex: 1;

  height: calc(100vh);

  justify-content: center;
  align-items: center;
  
  flex-direction: column;

`;
