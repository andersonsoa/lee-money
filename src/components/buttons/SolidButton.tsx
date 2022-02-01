import { Spinner } from "../Spinner";

interface SolidButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  disabled?: boolean;
}

export const SolidButton: React.FC<SolidButtonProps> = ({
  children,
  onClick,
  isLoading,
  disabled,
  type = "button",
  size = "md",
  variant = "primary",
}) => {
  const classes = {
    base: "grid place-items-center cursor-pointer rounded-md transition-colors hover:shadow-lg hover:brightness-125",
    variants: {
      primary: "bg-fuchsia-800 text-gray-100",
      success: "bg-green-700 text-gray-100",
      warning: "bg-yellow-700 text-gray-100",
      danger: "bg-red-700 text-gray-100",
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
