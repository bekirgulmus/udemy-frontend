import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.tsx";

export const ContextExample = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{backgroundColor: theme.primary.main}}>Context Example</div>
  )
}
