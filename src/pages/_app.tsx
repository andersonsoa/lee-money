import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "../server/routes/_app";

function MyApp({ Component, pageProps, router }: AppProps) {
  const { asPath } = router;

  return (
    <AnimatePresence exitBeforeEnter presenceAffectsLayout>
      <Component {...pageProps} key={asPath} />
    </AnimatePresence>
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
