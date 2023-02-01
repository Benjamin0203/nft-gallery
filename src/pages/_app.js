import { useRouter } from "next/router";
// import { AnimatePresence } from "framer-motion";
import { GlobalStyles } from "components/shared/GlobalStyles";
import PageLayout from "components/PageLayout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    // <AnimatePresence mode='wait'>
    <>
      <GlobalStyles />
      <PageLayout>
        <Component {...pageProps} key={router.pathname} />
      </PageLayout>
    {/* </AnimatePresence> */}
    </>
  );
}

export default MyApp;
