import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: ${props => props.theme["bg-overlay"]};
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["gray-500"]};
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme["gray-800"]};
  box-shadow: 0px 0px 6px 2px ${props => props.theme["gray-200"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      border-radius: 6px;
      border: 0;
      background-color: ${(props) => props.theme["gray-900"]};
      padding: 1rem;
      color: ${(props) => props.theme["gray-500"]};
      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }
    button[type="submit"] {
      height: 58px;
      border: 0;
      background-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;
      &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
      &:not(:disabled):hover {
        background-color: ${(props) => props.theme["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;
