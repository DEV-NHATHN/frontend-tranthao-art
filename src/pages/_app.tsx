import DefaultLayout from '@/components/layout/DefaultLayout';
import { theme } from '@/config/types/theme';
import '@/styles/globals.css';
import '@/styles/scss/index.scss';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
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

  const router = useRouter();

  return (
    <RecoilRoot>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            },
            animateState: {
              opacity: 1,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            },
            exitState: {
              clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
            },
          }}
          className="base-page-size"
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {mainContent}
          </ThemeProvider>
        </motion.div>
      </AnimatePresence>
    </RecoilRoot>
  );
}
