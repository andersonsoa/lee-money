import { Logo } from "./Logo";

export const Layout: React.FC = ({ children }) => {
  return (
    <section className="flex h-screen overflow-hidden max-w-7xl w-full mx-auto pt-20 pb-6 px-4 relative">
      <header className="absolute left-0 right-0 top-0 h-20 flex items-center justify-between px-4">
        <Logo size="text-lg" innerSize="text-2xl" />

        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-slate-800" />
          <div className="flex-1">
            <p>Anderson S.</p>
            <a className="text-xs cursor-pointer text-gray-400">Sair</a>
          </div>
        </div>
      </header>
      <aside className="max-w-xs w-full">
        <nav>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Gráficos</a>
            </li>
            <li>
              <a>Cadastros</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="w-full overflow-x-auto scrollbar-hide">{children}</main>
    </section>
  );
};
