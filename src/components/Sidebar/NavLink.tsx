import NextLink from "next/link";
import { motion } from "framer-motion";

import { RiMoneyCnyCircleFill } from "react-icons/ri";

interface NavLinkProps {
  href: string;
  active?: boolean;
  Icon?: React.ElementType;
}
export const NavLink: React.FC<NavLinkProps> = ({ Icon, active = false, href, children }) => {
  const variants = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <li className="group">
      <NextLink href={href}>
        <motion.a
          initial="initial"
          animate="initial"
          whileHover="animate"
          className="text-sm text-gray-400 flex items-center px-2 space-x-4 cursor-pointer group-hover:text-gray-100"
        >
          <div className="bg-dark-800 rounded-md grid place-items-center transition-all w-8 h-8 group-hover:bg-dark-700">
            {Icon && <Icon className="group-hover:text-fuchsia-500 transition-all" />}
          </div>

          <span className="flex-1">{children}</span>

          <motion.div variants={variants} initial={active ? "animate" : undefined} className="w-2 h-2 rounded-full bg-fuchsia-500" />
        </motion.a>
      </NextLink>
    </li>
  );
};
