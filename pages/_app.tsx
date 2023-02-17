import "../styles/globals.css";

import { ReactElement } from "react";
import type { AppProps } from "next/app";
import PageWithLayoutType from "../types/LayoutType";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
};

function App({ Component, pageProps }: AppLayoutProps) {
  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default App;
