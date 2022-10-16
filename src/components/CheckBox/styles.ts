import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

interface CheckBoxFieldProps {
  variant: "true" | "false";
}

export const CheckboxContainer = styled.section`
  display: flex;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: flex-start !important;

  gap: 10px;

`;

export const CheckBoxContainer = styled(Checkbox.Root)<CheckBoxFieldProps>`
  height: 24px !important;
  width: 24px !important;

  position: relative;

  border: 1px solid ${props => props.theme["gray-400"]};
  background-color: ${props => props.variant === "true" 
                          ? props.theme["purple-500"] 
                          : props.theme["gray-700"]} !important;
  border-radius: 6px;

  margin-top: -4px;
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 6px 2px ${props => {
    return props.variant === "false" 
          ? "transparent"
          : props.theme["purple-500"]; 
  }};
`;

export const CheckboxLabel = styled.label`
  font-family: "Roboto", sans-serif;
  font-size:  1rem;
  font-style: oblique;

  margin-top: -4px;
  margin-bottom: 16px;
  
  cursor: pointer;

`;
