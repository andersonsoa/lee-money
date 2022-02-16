import NextLink from "next/link";
import { FaUser } from "react-icons/fa";

import { useStore } from "../context/Store";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
  const { cicle } = useStore();

  return (
    <header className="mb-4 flex h-full items-center justify-between border-b-[1px] border-fuchsia-900 px-4">
      <Logo size="text-lg" innerSize="text-2xl" />

      <div className="flex items-center gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-800">
          <FaUser className="text-gray-200" />
        </div>
        <div className="flex-1">
          <p>Anderson S.</p>
          <NextLink href="/">
            <a className="cursor-pointer text-xs text-gray-400">Sair</a>
          </NextLink>
        </div>
      </div>
    </header>
  );
};
