import { FaHome, FaAppStore } from "react-icons/fa";
import { Header } from "./Header";
import { NavLink } from "./Sidebar/NavLink";

export const Layout: React.FC = ({ children }) => {
  return (
    <section className="grid grid-cols-12 grid-rows-[5rem] gap-y-4 gap-x-12 h-screen overflow-hidden px-4 max-w-7xl w-full mx-auto">
      <Header />

      <aside className="h-full col-span-3 md:block hidden">
        <nav>
          <ul className="space-y-2">
            <NavLink Icon={FaHome} href="/home">
              Home
            </NavLink>
            <NavLink Icon={FaAppStore} href="/dashboard">
              Dashboard
            </NavLink>
          </ul>
        </nav>
      </aside>
      <main className="h-full md:col-span-9 col-span-12 overflow-x-auto scrollbar-hide">{children}</main>
    </section>
  );
};
