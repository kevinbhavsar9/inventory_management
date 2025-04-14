import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WidgetLayoutProvider } from "@/context/CityLayoutContext";
import Layout from "@/components/Layout";
import { SelectedDatasetProvider } from "@/context/SelectedDatasetContext";
import { ThemeProvider } from '@emotion/react';
import theme from '@/utils/theme';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SelectedDatasetProvider>
        <WidgetLayoutProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WidgetLayoutProvider>
      </SelectedDatasetProvider>
    </ThemeProvider >
  );
}
