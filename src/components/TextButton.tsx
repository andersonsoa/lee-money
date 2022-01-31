import { Spinner } from "./Spinner";

interface TextButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
}

export const TextButton: React.FC<TextButtonProps> = ({ children, onClick, isLoading, disabled, type = "button" }) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className="bg-gray-900/15 hover:bg-dark-800 cursor-pointer rounded-md px-4 py-2 text-sm font-bold uppercase text-red-500 transition-colors hover:shadow-lg"
    >
      {isLoading ? <Spinner size={6} /> : children}
    </button>
  );
};
