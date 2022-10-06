import styled from "styled-components";

interface ErrorMessageContainer {
  typeError: "warning" | "error" | "danger";
}

export const ErrorMessageContainer = styled.div<ErrorMessageContainer>`
  margin-top: 0.765rem;

  color: ${props => {
    switch (props.typeError) {
      case "danger":
        return props.theme["orange-400"];
      case "warning":
        return props.theme["red-300"];
      case "error":
        return props.theme["red-700"];
      default:
        return props.theme.white;
    }
  }};

  display: flex;
  flex-direction: row !important;

  justify-content: flex-start !important;
  align-items: flex-start !important;

  gap: 6px;

  width: 100%;

`;
