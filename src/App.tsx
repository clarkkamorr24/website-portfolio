import Header from "./components/layout/header";
// import { ModeToggle } from "./components/mode-toggle";
import ThemeProvider from "./context/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background flex h-screen w-screen">
        <div className="bg-background flex h-20 w-full items-center shadow-md">
          <Header />
        </div>

        {/* <ModeToggle /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
