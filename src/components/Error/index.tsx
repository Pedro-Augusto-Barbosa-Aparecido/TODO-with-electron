import { Bug, Warning, WarningCircle } from "phosphor-react";
import { ErrorMessageContainer } from "./styles";

interface ErrorMessageProps {
  typeError: "warning" | "error" | "danger";
  message: string
}

export function ErrorMessage({ typeError, message }: ErrorMessageProps) {
  return (
    <ErrorMessageContainer
      typeError={typeError}
    >
      {typeError === "warning" && 
      <WarningCircle size={15} />}
      {typeError === "error" && 
      <Bug size={15} />}
      {typeError === "danger" && 
      <Warning size={15} />}
      <span>
        {message}
      </span>
    </ErrorMessageContainer>
  );
}