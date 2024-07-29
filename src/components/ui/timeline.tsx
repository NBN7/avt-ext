import * as React from 'react';
import { twMerge } from 'tailwind-merge';

export interface TimelineProps {
  items: string[];
  circleClassName?: string;
  lineClassName?: string;
}

const Timeline: React.FC<TimelineProps> = ({
  items,
  circleClassName,
  lineClassName,
}) => {
  return (
    <ol
      className={twMerge('relative border-l border-primary/30', lineClassName)}
    >
      {items.map((item, index) => (
        <li key={index} className="mb-10 ml-4">
          <div
            className={twMerge(
              'absolute size-2 bg-primary rounded-full mt-2.5 -left-1 border border-white',
              circleClassName
            )}
          ></div>
          <h3 className="text-lg font-semibold text-pretty">{item}</h3>
        </li>
      ))}
    </ol>
  );
};

export { Timeline };
