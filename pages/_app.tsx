// scroll bar
import "simplebar/src/simplebar.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

import cookie from "cookie";
import { ReactElement, ReactNode } from "react";
// next
import { NextPage } from "next";
import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
//
import { Provider as ReduxProvider } from "react-redux";
// redux
import { store } from "../src/redux/store";
// utils
import { getSettings } from "../src/utils/settings";
import { SettingsValueProps } from "../src/components/settings/type";
// contexts
import { SettingsProvider } from "../src/contexts/SettingsContext";
// theme
import ThemeProvider from "../src/theme";
import GlobalStyles from "../src/theme/globalStyles";
// components
import Settings from "../src/components/settings";
import MotionLazyContainer from "../src/components/animate/MotionLazyContainer";

// ----------------------------------------------------------------------

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  settings: SettingsValueProps;
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Free Invoice Template Generator by HubSpot</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/icon-32x32.png"></link>
        <meta name="theme-color" content="#B7211A" />
      </Head>

      <ReduxProvider store={store}>
        <SettingsProvider defaultSettings={settings}>
          <ThemeProvider>
            <MotionLazyContainer>
              <GlobalStyles />
              {getLayout(<Component {...pageProps} />)}
            </MotionLazyContainer>
          </ThemeProvider>
        </SettingsProvider>
      </ReduxProvider>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || "" : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
