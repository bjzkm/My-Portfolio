import "../styles/global.scss";
import type { AppProps } from "next/app";
import { ElementOffsetProvider } from "../context/ElementOffsetContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ElementOffsetProvider>
      <Component {...pageProps} />
    </ElementOffsetProvider>
  );
}
