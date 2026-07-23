import React, { memo } from 'react';
import type { Translations } from '../types';

interface DarshanCardProps {
  t?: Translations;
}

export const DarshanCard: React.FC<DarshanCardProps> = memo(({ t }) => {
  return (
    <div className="relative w-full select-none">
      {/* Temple frame card containing ONLY the GIF */}
      <div className="temple-frame w-full overflow-hidden relative rounded-sm">
        <picture>
          <source srcSet="/darshan.webp" type="image/webp" />
          <img
            src="/darshan.gif"
            alt={t?.name || 'Dada Bhagwan'}
            className="block w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
            draggable={false}
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
    </div>
  );
});

export default DarshanCard;
