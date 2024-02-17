import React from 'react';

interface IProps {
  variant: 'primary' | 'secondary';
  label: string;
  onClick: () => void;
  ariaLabel?: string;
  isLoading?: boolean;
}

export const Button: React.FC<IProps> = ({
  variant,
  label,
  onClick,
  ariaLabel,
  isLoading,
}) => {
  const color = {
    primary: 'bg-cyan-500',
    secondary: 'bg-lime-300',
  };

  return (
    <button
      className={`${color[variant]} bg-lime-300 px-3 py-2 rounded-md text-zinc-800 font-bold`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {/*TODO Should be changed to a spinner */}
      {isLoading ? `Loading...` : label}
    </button>
  );
};
