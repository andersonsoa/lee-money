import NextLink from "next/link";

interface NavLinkSimpleProps {
  path: string;
}

export const NavLinkSimple: React.FC<NavLinkSimpleProps> = ({ children, path }) => (
  <li>
    <NextLink href={path}>
      <div className="-ml-[1px] cursor-pointer border-l border-l-transparent pl-4 text-sm text-gray-400 hover:border-l-fuchsia-500 hover:text-gray-100">
        {children}
      </div>
    </NextLink>
  </li>
);
