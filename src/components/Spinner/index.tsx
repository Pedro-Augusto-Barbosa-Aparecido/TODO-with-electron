import { TailSpin } from "react-loader-spinner";
import { useTheme } from "styled-components";
import { SpinnerContainer } from "./styles";

export function Spinner () {
  const colors = useTheme();

  return (
    <SpinnerContainer>
      <TailSpin color={colors["red-700"]} />
    </SpinnerContainer>
  );
}