import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">Hello World</div>;
    </ThemeProvider>
  );
}
