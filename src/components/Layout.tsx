import { useRouter } from "next/router";
import { RiAppsFill, RiHome3Fill } from "react-icons/ri";
import { Header } from "./Header";
import { NavLink } from "./sidebar/NavLink";

export const Layout: React.FC = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <section className="mx-auto grid h-screen w-full max-w-7xl grid-cols-12 grid-rows-[5rem] gap-y-4 gap-x-12 overflow-hidden px-4">
      <Header />

      <aside className="col-span-2 hidden h-full md:block">
        <nav>
          <ul className="space-y-2">
            <NavLink Icon={RiHome3Fill} href="/home" active={asPath === "/home"}>
              Home
            </NavLink>
            <NavLink Icon={RiAppsFill} href="/dashboard" active={asPath === "/dashboard"}>
              Dashboard
            </NavLink>
          </ul>
        </nav>
      </aside>
      <main className="scrollbar-hide col-span-12 h-full overflow-x-auto md:col-span-10">{children}</main>
    </section>
  );
};
