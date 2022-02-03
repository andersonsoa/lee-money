import NextLink from "next/link";

interface NavLinkSimpleProps {
  path: string;
  active?: boolean;
}

export const NavLinkSimple: React.FC<NavLinkSimpleProps> = ({
  children,
  path,
  active = false,
}) => {
  const classes = {
    base: "-ml-[1px] cursor-pointer border-l border-l-transparent pl-4 py-1 text-xs text-gray-400 hover:border-l-fuchsia-500 hover:text-gray-100 whitespace-nowrap",
    active: "border-l-fuchsia-500 text-gray-100",
  };
  return (
    <li>
      <NextLink href={path}>
        <div className={`${classes.base} ${active && classes.active}`}>
          {children}
        </div>
      </NextLink>
    </li>
  );
};
