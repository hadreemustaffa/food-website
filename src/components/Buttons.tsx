interface ButtonPrimaryProps {
  value: string;
}
interface ButtonIconProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const ButtonPrimary = ({ value }: ButtonPrimaryProps) => {
  return (
    <button className="bg-tomato-200 hover:bg-tomato-150 rounded-sm py-1 px-4">
      {value}
    </button>
  );
};

export const ButtonSecondary = ({ value }: ButtonPrimaryProps) => {
  return (
    <button className="border-black-400 hover:border-black-300 rounded-sm py-1 px-4">
      {value}
    </button>
  );
};

export const ButtonIcon = ({ children, onClick }: ButtonIconProps) => {
  return <button onClick={onClick}>{children}</button>;
};
