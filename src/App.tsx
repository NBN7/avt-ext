import { TechSection } from '@/components/TechSection';
import { ComponentsSection } from './components/ComponentsSection';
import AuravantLogo from '@/assets/avt-logo.svg';

function App() {
  console.log('You should remove this!');

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <img className="size-80" src={AuravantLogo} alt="Auravant Logo" />

      <TechSection />
      <ComponentsSection />
    </main>
  );
}

export default App;
