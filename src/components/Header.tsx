import NextLink from "next/link";
import { Logo } from "./Logo";

export const Header: React.FC = () => (
  <header className="col-span-12 flex items-center justify-between border-b-2 border-fuchsia-900 mb-4">
    <Logo size="text-lg" innerSize="text-2xl" />

    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-full bg-slate-800" />
      <div className="flex-1">
        <p>Anderson S.</p>
        <NextLink href="/">
          <a className="text-xs cursor-pointer text-gray-400">Sair</a>
        </NextLink>
      </div>
    </div>
  </header>
);
