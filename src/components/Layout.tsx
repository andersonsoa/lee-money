import { useRouter } from "next/router";
import { RiAppsFill, RiHome3Fill, RiPieChartBoxFill } from "react-icons/ri";
import { Toaster } from "react-hot-toast";
import { Header } from "./Header";
import { NavLink } from "./sidebar/NavLink";
import { NavLinkGroup } from "./sidebar/NavLinkGroup";
import { NavLinkSimple } from "./sidebar/NavLinkSimple";

export const Layout: React.FC = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <section className="mx-auto grid h-screen w-full auto-rows-max grid-cols-12 gap-y-4 overflow-hidden">
      <div className="col-span-12 h-[5rem]">
        <Header />
      </div>

      <div className="col-span-12 grid h-[calc(100vh-5rem)] grid-cols-12 gap-x-4 px-4">
        <aside className="col-span-3 hidden h-full md:col-span-2 md:block lg:col-span-2">
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
                href="/spents"
                active={asPath === "/spents"}
              >
                Gastos
              </NavLink>
              <NavLink
                Icon={RiPieChartBoxFill}
                href="/charts"
                active={asPath === "/charts"}
              >
                Gráficos
              </NavLink>

              <NavLinkGroup title="Configurações">
                <NavLinkSimple
                  active={
                    asPath === "/settings/cicles" ||
                    asPath.includes("/settings/cicles")
                  }
                  path="/settings/cicles"
                >
                  Ciclos de Gasto
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

        <main className="scrollbar-hide col-span-12 h-full overflow-x-auto p-4 md:col-span-9">
          {children}
        </main>
      </div>

      <Toaster />
    </section>
  );
};
