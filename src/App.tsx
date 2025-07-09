import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import ThemeProvider from "@/context/theme-provider";
import Skill from "@/components/sections/skill";
import Resume from "@/components/sections/resume";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background flex w-screen flex-col">
        <Header />
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4">
          <Hero />
          <Resume />
          <Skill />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
