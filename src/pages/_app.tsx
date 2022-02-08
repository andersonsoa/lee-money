import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "../server/routes/_app";
import { StoreProvider } from "../context/Store";

function MyApp({ Component, pageProps, router }: AppProps) {
  const { asPath } = router;

  return (
    <StoreProvider>
      <AnimatePresence exitBeforeEnter presenceAffectsLayout>
        <Component {...pageProps} key={asPath} />
      </AnimatePresence>
    </StoreProvider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    if (process.browser) {
      return {
        url: "/api/trpc",
      };
    }

    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    return {
      url,
    };
  },

  ssr: false,
})(MyApp);
