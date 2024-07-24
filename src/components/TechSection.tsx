import ReactLogo from '../assets/react.svg';
import TypeScriptLogo from '../assets/typescript.svg';
import TailwindLogo from '../assets/tailwind.svg';

import { logoStyle } from '../constants/logoStyle';

export const TechSection = () => {
  return (
    <div className="flex gap-4">
      <img className={logoStyle} src={ReactLogo} alt="React Logo" />
      <img className={logoStyle} src={TypeScriptLogo} alt="TypeScript Logo" />
      <img className={logoStyle} src={TailwindLogo} alt="Tailwind Logo" />
    </div>
  );
};
