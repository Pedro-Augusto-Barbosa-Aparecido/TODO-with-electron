import React from "react";
import { ModalInputContainer } from "./styles";

interface ModalInputProps {
  children: React.ReactNode[]
}

export function ModalInput ({ children }: ModalInputProps) {
  return (
    <ModalInputContainer>
      {children.map(child => child)}
    </ModalInputContainer>
  );
}