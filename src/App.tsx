import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="theme">
        <ModeToggle />
        <div>Vite + React</div>
      </ThemeProvider>
    </>
  );
}

export default App;
