import "./App.css";
import { Home } from "./components/screens/Home";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="theme">
        <Home />
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
