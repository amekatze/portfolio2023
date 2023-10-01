import { ThemeProvider } from "../contexts/ThemeContext";
import "@/styles/globals.scss"; // Import your global styles
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
