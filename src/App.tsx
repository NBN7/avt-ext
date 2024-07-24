import { TechSection } from "./components/TechSection";
import AuravantLogo from "./assets/avt-logo.svg";

function App() {
  console.log("You should remove this!");

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <img className="size-[300px]" src={AuravantLogo} alt="Auravant Logo" />

      <TechSection />
    </main>
  );
}

export default App;
