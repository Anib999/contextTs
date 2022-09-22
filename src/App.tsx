import { createContext } from "react";
import ThemeWrapper from "./components/Themewrapper";
import ThemeProvider from "./Context/ThemeContext";

interface UserContextInterface {
  name: string;
  me: boolean;
  url?: string;
}

const UserCtx = createContext<UserContextInterface | null>(null);

const sampleContextData: UserContextInterface = {
  name: "Chics",
  me: true,
};

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <div>App</div>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
