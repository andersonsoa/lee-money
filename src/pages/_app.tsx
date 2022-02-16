import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "../server/routes/_app";
import { StoreProvider } from "../context/Store";
import superjson from "superjson";

import "../styles/globals.css";

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

function getBaseUrl() {
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = getBaseUrl();

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${url}/api/trpc`,
        }),
      ],
      // url: `${url}/api/trpc`,
      transformer: superjson,
    };
  },

  ssr: false,
})(MyApp);
