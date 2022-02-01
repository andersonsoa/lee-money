import { Spinner } from "../Spinner";

interface TextButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  disabled?: boolean;
}

export const TextButton: React.FC<TextButtonProps> = ({
  children,
  onClick,
  isLoading,
  disabled,
  type = "button",
  size = "md",
  variant = "primary",
}) => {
  const classes = {
    base: "grid place-items-center cursor-pointer rounded-md uppercase transition-colors font-bold hover:shadow-lg bg-gray-900/15 hover:bg-dark-800 hover:brightness-125",
    variants: {
      primary: "text-fuchsia-700",
      success: "text-green-700",
      warning: "text-yellow-700",
      danger: "text-red-700",
    },
    sizes: {
      sm: "px-2 py-1 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-lg",
    },
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${classes.base} ${classes.variants[variant]} ${classes.sizes[size]}`}
    >
      {isLoading ? <Spinner size={6} /> : children}
    </button>
  );
};
