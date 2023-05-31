import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";
import { Inter } from "next/font/google";

import store from "@/redux/store";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Pokemon</title>
      </Head>
      <div className={`${inter.className}`}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
