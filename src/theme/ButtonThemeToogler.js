import React from "react";
import styled from "styled-components";
import useTheme from "./themeContext";

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.toggleBorder};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  transition: all 0.5s ease;
  &:focus {
    outline: none;
  }
`;

const ButtonThemeToggle = () => {
  const { toogleTheme, theme } = useTheme();
  console.log("toogleTheme", toogleTheme);
  console.log("theme", theme);

  const changeTheme = () => {
    console.log("Change theme fired");
    toogleTheme();
  };

  return (
    <ToggleButton onClick={() => changeTheme()}>Toggle Theme</ToggleButton>
  );
};

export default ButtonThemeToggle;
