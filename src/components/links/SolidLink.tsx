import NextLink from "next/link";

interface SolidLinkProps {
  href: string;
  variant?: "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
}

export const SolidLink: React.FC<SolidLinkProps> = ({ children, href, size = "md", variant = "primary" }) => {
  const classes = {
    base: "cursor-pointer rounded-md uppercase transition-colors hover:shadow-lg",
    variants: {
      primary: "bg-blue-500 hover:bg-blue-700 text-gray-100",
      success: "bg-green-500 hover:bg-green-700 text-gray-100",
      warning: "bg-yellow-500 hover:bg-yellow-700 text-gray-100",
      danger: "bg-red-500 hover:bg-red-700 text-gray-100",
    },
    sizes: {
      sm: "px-2 py-1 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-lg",
    },
  };

  return (
    <NextLink href={href}>
      <a className={`${classes.base} ${classes.variants[variant]} ${classes.sizes[size]}`}>{children}</a>
    </NextLink>
  );
};
