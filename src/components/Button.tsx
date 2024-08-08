import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'icon';
  value: string;
  children?: React.ReactNode;
}

interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ value, variant, children, ...props }: ButtonProps) => {
  if (variant === 'primary') {
    return (
      <button
        {...props}
        className="bg-tomato-200 hover:bg-tomato-150 rounded-sm py-2 px-4"
      >
        {value}
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        {...props}
        className="w-fit border-2 border-black-400 hover:border-black-300 border-solid rounded-sm py-2 px-4"
      >
        {value}
      </button>
    );
  }
};

export const ButtonIcon = ({ children, ...props }: ButtonIconProps) => {
  return <button {...props}>{children}</button>;
};
