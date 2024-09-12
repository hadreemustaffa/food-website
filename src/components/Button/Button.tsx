import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'icon';
  value: string;
  children?: React.ReactNode;
}

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ value, variant, children, ...props }: ButtonProps) => {
  if (variant === 'primary') {
    return (
      <button {...props} className='flex flex-row items-center gap-4 text-nowrap rounded-sm bg-tomato-300 px-4 py-2 font-bold tracking-wider text-white shadow-sm shadow-black-100 transition-colors hover:bg-tomato-200'>
        {value}
        {children}
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button {...props} className='flex w-fit flex-row items-center gap-4 rounded-sm border-2 border-solid border-tomato-300 px-4 py-2 font-bold shadow-sm shadow-black-100 transition-colors hover:border-tomato-200 hover:text-tomato-200'>
        {value}
        {children}
      </button>
    );
  }
};

export const ButtonIcon = ({ children, ...props }: ButtonIconProps) => {
  return <button {...props}>{children}</button>;
};
