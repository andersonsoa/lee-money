import NextLink from "next/link";

interface TextLinkProps {
  href: string;
  variant?: "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
}

export const TextLink: React.FC<TextLinkProps> = ({
  children,
  href,
  size = "md",
  variant = "primary",
}) => {
  const classes = {
    base: "grid place-items-center cursor-pointer rounded-md uppercase transition-colors font-bold hover:shadow-lg bg-gray-900/15 hover:bg-dark-800 hover:brightness-125",
    variants: {
      primary: "text-fuchsia-500",
      success: "text-green-500",
      warning: "text-yellow-500",
      danger: "text-red-500",
    },
    sizes: {
      sm: "px-2 py-1 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-lg",
    },
  };

  return (
    <NextLink href={href}>
      <a
        className={`${classes.base} ${classes.variants[variant]} ${classes.sizes[size]}`}
      >
        {children}
      </a>
    </NextLink>
  );
};
