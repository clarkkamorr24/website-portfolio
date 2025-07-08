import ThemeProvider from "./context/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background flex h-screen w-screen">
        <div className="mx-auto h-20 w-full max-w-4xl bg-amber-300"></div>

        {/* <ModeToggle /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
