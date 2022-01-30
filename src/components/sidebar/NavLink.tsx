import NextLink from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
  Icon: React.ElementType;
  href: string;
  active?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ Icon, href, children, active = false }) => {
  const variants = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 0, opacity: 0, scale: 3 },
  };

  const iconClasses = active ? "text-fuchsia-500" : "transition-all group-hover:text-fuchsia-500";
  const childrenClasses = active ? "flex-1 text-gray-100" : "flex-1 text-gray-400 group-hover:text-gray-100";

  return (
    <li className="group">
      <NextLink href={href}>
        <motion.a
          initial="initial"
          animate="initial"
          exit="exit"
          whileFocus="animate"
          whileHover="animate"
          className="flex cursor-pointer items-center space-x-4 px-2 text-sm"
        >
          <div className="bg-dark-800 group-hover:bg-dark-700 grid h-8 w-8 place-items-center rounded-md transition-all">
            <Icon className={iconClasses} />
          </div>

          <span className={childrenClasses}>{children}</span>

          <motion.div variants={variants} transition={{ duration: 0.2 }} className="h-2 w-2 rounded-full bg-fuchsia-500" />
        </motion.a>
      </NextLink>
    </li>
  );
};
