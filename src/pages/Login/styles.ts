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

    /* position: relative; */

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    width: 400px;

    div {
      svg {
        position: initial;
        &:hover {
          cursor: default;
        }
      }
    }

    svg {
      position: absolute;
      top: 13px;
      right: 15px;

      &:hover {
        cursor: pointer;
      }

      &:active {
        cursor: default;
      }

    }

    label {
      font-family: "Roboto", sans-serif;
      font-style: oblique;
    }

    input, section {
      width: 100%;
      height: 48px;

      padding: 0 15px;
      border-radius: 6px;

      font-size: 1.2rem;

      border: 0;

      background-color: ${props => props.theme["gray-800"]};
      margin-top: 10px;

      color: ${props => props.theme["gray-400"]};

      &:focus {
        box-shadow: 0 0 6px 6px ${props => props.theme['green-700']};
      }

    }

    input[id="password"] {
      margin: 0;
    }
 
    section {
      height: auto;
      padding: 0;

      position: relative;

    }

  }

  button {
    width: 100%;
    height: 48px;
    
    cursor: pointer;

    background-color: ${props => props.theme["purple-500"]};

    border: 0;
    border-radius: 4px;

    font-family: "Roboto", sans-serif;
    font-size: 1.3rem;
    font-weight: bold;

    color: ${props => props.theme["gray-100"]};

    &:hover {
      filter: brightness(1.1);
      box-shadow: 0 0 6px 2px ${props => props.theme['purple-600']};

    }

    &:disabled {
      cursor: not-allowed;
      opacity: .7;
    }

  }

`;

export const ImageContainer = styled.div`
  display: none;

  height: calc(100vh);
  position: relative;
  z-index: -999;

  /* filter: blur(2px); */

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
