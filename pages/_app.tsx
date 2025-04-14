import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WidgetLayoutProvider } from "@/context/CityLayoutContext";
import Layout from "@/components/Layout";
import { SelectedDatasetProvider } from "@/context/SelectedDatasetContext";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SelectedDatasetProvider>
      <WidgetLayoutProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WidgetLayoutProvider>
    </SelectedDatasetProvider>
  );
}
