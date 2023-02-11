import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutType from "../types/LayoutType";
import { ReactElement } from "react";

type AppLayoutProps = AppProps & {
  Component: LayoutType;
  pageProps: any;
};

export default function App({ Component, pageProps }: AppLayoutProps) {
  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
