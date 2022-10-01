import "styled-components";
import { defaultTheme } from "../styles/theme/default";

type THEME = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends THEME {}
}
