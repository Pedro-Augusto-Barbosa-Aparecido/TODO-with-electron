import { X, Square, Minus } from "phosphor-react";
import { CloseButton, HeaderContainer, MaximizeButton, MenuButtonContainer, MinimizeButton } from "./styles";

export function Header() {
  function handleMaximizeWindow () {
      window.Main.maximize();
    
  }

  function handleMinimizeWindow () {
    window.Main.minimize();
  }

  return (
    <HeaderContainer>
      <div>
        <p>TODO</p>
      </div>
      <MenuButtonContainer>
        <MinimizeButton
          onClick={handleMinimizeWindow}
        >
          <Minus weight="bold" />
        </MinimizeButton>
        <MaximizeButton
          onClick={handleMaximizeWindow}
        >
          <Square weight="bold" />
        </MaximizeButton>
        <CloseButton>
          <X weight="bold" />
        </CloseButton>
      </MenuButtonContainer>
    </HeaderContainer>
  );

}
