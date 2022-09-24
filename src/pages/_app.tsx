import DefaultLayout from '@/components/layout/DefaultLayout';
import { theme } from '@/config/types/theme';
import '@/styles/globals.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { RecoilRoot } from 'recoil';

type MyAppProps = {
  Component: React.ComponentType | any;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: MyAppProps) {
  let mainContent;
  if (Component.layout === `default`) {
    mainContent = (
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    );
  } else mainContent = <Component {...pageProps} />;

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {mainContent}
      </ThemeProvider>
    </RecoilRoot>
  );
}
