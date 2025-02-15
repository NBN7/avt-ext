import AuravantLogo from '@/assets/avt-logo.svg';
import ReactLogo from '@/assets/react.svg';
import TailwindLogo from '@/assets/tailwind.svg';
import TypeScriptLogo from '@/assets/typescript.svg';

const logoStyle = 'size-10 hover:scale-110 transition-all cursor-pointer';

function App() {
  console.log('You should remove this!');

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 sm:flex-row">
      <img className="size-80" src={AuravantLogo} alt="Auravant Logo" />
      <img className={logoStyle} src={ReactLogo} alt="React Logo" />
      <img className={logoStyle} src={TypeScriptLogo} alt="TypeScript Logo" />
      <img className={logoStyle} src={TailwindLogo} alt="Tailwind Logo" />
    </main>
  );
}

export default App;
