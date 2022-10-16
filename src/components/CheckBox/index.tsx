import { Check } from "phosphor-react";
import { CheckboxContainer, CheckBoxContainer, CheckboxLabel } from "./styles";

import * as Checkbox from "@radix-ui/react-checkbox";
import { useTheme } from "styled-components";

interface CheckBoxProps {
  label: string;
  onValueChange: (value: string) => void;
  value: "true" | "false";
}

export function CheckBox ({ label, onValueChange, value }: CheckBoxProps) {
  const colors = useTheme();

  return (
    <CheckboxContainer>
      <CheckBoxContainer
        name="remembers"
        id="remembers"
        onCheckedChange={() => {
          onValueChange(value === "false" ? "true" : "false");
        }}
        value={value}
        variant={value}
      >
        <Checkbox.Indicator asChild>
          <Check 
            size={16} 
            color={colors.white}
            weight="bold" 
          />
        </Checkbox.Indicator>
      </CheckBoxContainer>
      <CheckboxLabel htmlFor="remembers">
        Lembre-se de mim!
      </CheckboxLabel>
    </CheckboxContainer>
  );
}