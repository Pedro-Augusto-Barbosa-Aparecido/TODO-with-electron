import { X, Square, Minus } from "phosphor-react";
import { CloseButton, HeaderContainer, HeaderContainerUserRegionDrag, MaximizeButton, MenuButtonContainer, MinimizeButton } from "./styles";

export function Header() {
  function handleMaximizeWindow () {
      window.Main.maximize();
    
  }

  function handleMinimizeWindow () {
    window.Main.minimize();
  }

  function handleCloseWindow () {
    window.Main.close();  
  }

  return (
    <HeaderContainer>
      <HeaderContainerUserRegionDrag>
        <p>Projeto de DB</p>
      </HeaderContainerUserRegionDrag>
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
        <CloseButton
          onClick={handleCloseWindow}
        >
          <X weight="bold" />
        </CloseButton>
      </MenuButtonContainer>
    </HeaderContainer>
  );

}
