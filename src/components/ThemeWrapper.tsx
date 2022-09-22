import React, { useContext } from "react";
import { Theme, ThemeContextType } from "../@types/theme";
import { ThemeContext } from "../Context/ThemeContext";

interface Props {
  children: React.ReactNode;
}
const ThemeWrapper: React.FC<Props> = ({ children }) => {
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;

  const handleChange = (event:string) => {
    console.log(event);
    
    changeTheme(event.target.value as Theme)
  }

  return (
    <div className="Theme-wrapper" data-theme={theme} onChange={handleChange}>
      <select className="Theme-toggler" name="toggleTheme">
        <option value="dark">dark</option>
        <option value="light">light</option>
      </select>
      {children}
    </div>
  );
};

export default ThemeWrapper;
