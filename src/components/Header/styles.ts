import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 40px;

  background-color: ${props => props.theme["gray-900"]};
  color: ${props => props.theme["gray-300"]};

  display: flex;

  justify-content: space-between;

`;

export const MenuButtonContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

`;

export const MenuButton = styled.div`
  height: 100%;
  width: 52px;

  display: flex;

  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-size: 1rem;
  transition: background-color 0.3s color 0.2s;

  &:hover {
    color: ${props => props.theme["white"]};

  }

`;

export const CloseButton = styled(MenuButton)`
  &:hover {
    background-color: ${props => props.theme["red-700"]};
  }

`;

export const MaximizeButton = styled(MenuButton)`
  &:hover {
    background-color: ${props => props.theme["gray-200"]};
  }
`;

export const MinimizeButton = styled(MenuButton)`
  &:hover {
    background-color: ${props => props.theme["gray-200"]};
  }
`;
