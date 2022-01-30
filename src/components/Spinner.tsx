interface SpinnerProps {
  size?: number;
}

export const Spinner: React.FC<SpinnerProps> = ({ size }) => {
  const sizeClass = size ? `h-${size} w-${size}` : "h-20 w-20";

  return <div className={`${sizeClass} animate-spin rounded-full border-4 border-fuchsia-600 border-t-transparent`} />;
};
