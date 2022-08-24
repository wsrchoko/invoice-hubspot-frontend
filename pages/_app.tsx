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
import { PersistGate } from "redux-persist/lib/integration/react";
// redux
import { store, persistor } from "../src/redux/store";
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
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <SettingsProvider defaultSettings={settings}>
            <ThemeProvider>
              <MotionLazyContainer>
                <GlobalStyles />
                {getLayout(<Component {...pageProps} />)}
              </MotionLazyContainer>
            </ThemeProvider>
          </SettingsProvider>
        </PersistGate>
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
