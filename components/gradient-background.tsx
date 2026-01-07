import type React from 'react';
interface GradientBackgroundProps {
  variant?: 'hero' | 'section' | 'card' | 'accent';
  className?: string;
  children?: React.ReactNode;
}

export default function GradientBackground({
  variant = 'section',
  className = '',
  children,
}: GradientBackgroundProps) {
  const getGradientClass = () => {
    switch (variant) {
      case 'hero':
        return 'bg-[#222222]';

      case 'section':
         return 'bg-[#222222]';

      case 'card':
         return 'bg-[#222222]';

      case 'accent':
         return 'bg-[#222222]';

      default:
        return 'bg-gray-900';
    }
  };

  return <div className={`${getGradientClass()} ${className}`}>{children}</div>;
}
