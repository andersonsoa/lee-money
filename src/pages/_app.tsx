import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  const { asPath } = router;

  return (
    <AnimatePresence exitBeforeEnter presenceAffectsLayout>
      <Component {...pageProps} key={asPath} />
    </AnimatePresence>
  );
}

export default MyApp;
