// remove this file when you start working on the project

import ReactLogo from '@/assets/react.svg';
import TypeScriptLogo from '@/assets/typescript.svg';
import TailwindLogo from '@/assets/tailwind.svg';

const logoStyle = 'size-10 hover:scale-110 transition-all cursor-pointer';

export const TechSection = () => {
  return (
    <div className="flex gap-4">
      <img className={logoStyle} src={ReactLogo} alt="React Logo" />
      <img className={logoStyle} src={TypeScriptLogo} alt="TypeScript Logo" />
      <img className={logoStyle} src={TailwindLogo} alt="Tailwind Logo" />
    </div>
  );
};
