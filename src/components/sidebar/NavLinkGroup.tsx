interface NavLinkGroupProps {
  title: string;
  active?: boolean;
}

export const NavLinkGroup: React.FC<NavLinkGroupProps> = ({ children, title }) => {
  return (
    <li className="space-y-2 px-2 pt-5">
      <h5 className="text-sm text-gray-100">{title}</h5>

      <ul className="border-dark-700 space-y-2 border-l">{children}</ul>
    </li>
  );
};
