'use client';
interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({onClick}) => {
  return (
    <button onClick={onClick} className=" btn btn-outline btn-primary ">
      Discover
    </button>
  );
}
export default Button;