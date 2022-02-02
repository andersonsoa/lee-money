import { useRouter } from "next/router";
import { RiAppsFill, RiHome3Fill } from "react-icons/ri";
import { Toaster } from "react-hot-toast";
import { Header } from "./Header";
import { NavLink } from "./sidebar/NavLink";
import { NavLinkGroup } from "./sidebar/NavLinkGroup";
import { NavLinkSimple } from "./sidebar/NavLinkSimple";

export const Layout: React.FC = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <section className="mx-auto grid h-screen w-full max-w-7xl grid-cols-12 grid-rows-[5rem] gap-y-4 gap-x-4 overflow-hidden px-4">
      <Toaster />
      <Header />

      <aside className="col-span-3 hidden h-full md:block">
        <nav>
          <ul className="space-y-2">
            <NavLink
              Icon={RiHome3Fill}
              href="/home"
              active={asPath === "/home"}
            >
              Home
            </NavLink>
            <NavLink
              Icon={RiAppsFill}
              href="/dashboard"
              active={asPath === "/dashboard"}
            >
              Dashboard
            </NavLink>

            <NavLinkGroup title="Configurações">
              <NavLinkSimple
                active={
                  asPath === "/settings/periods" ||
                  asPath.includes("/settings/periods")
                }
                path="/settings/periods"
              >
                Periodos
              </NavLinkSimple>
              <NavLinkSimple
                active={
                  asPath === "/settings/payments" ||
                  asPath.includes("/settings/payments")
                }
                path="/settings/payments"
              >
                Métodos de Pagamento
              </NavLinkSimple>
              <NavLinkSimple
                active={
                  asPath === "/settings/tags" ||
                  asPath.includes("/settings/tags")
                }
                path="/settings/tags"
              >
                Tipos de Gasto
              </NavLinkSimple>
            </NavLinkGroup>
          </ul>
        </nav>
      </aside>
      <main className="scrollbar-hide col-span-12 h-full overflow-x-auto md:col-span-9">
        {children}
      </main>
    </section>
  );
};
