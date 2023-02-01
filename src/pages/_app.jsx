import { useRouter } from "next/router";
import { GlobalStyles } from "components/shared/GlobalStyles";
import PageLayout from "components/PageLayout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <GlobalStyles />
      <PageLayout>
        <Component {...pageProps} key={router.pathname} />
      </PageLayout>
    </>
  );
}

export default MyApp;
