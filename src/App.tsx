import { TechSection } from '@/components/TechSection';
import AuravantLogo from '@/assets/avt-logo.svg';
import { ComponentsSection } from './components/ComponentsSection';

function App() {
  console.log('You should remove this!');

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <img className="size-80" src={AuravantLogo} alt="Auravant Logo" />

      <TechSection />
      <ComponentsSection />
    </main>
  );
}

export default App;
