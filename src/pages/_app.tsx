import DefaultLayout from '@/components/layout/DefaultLayout';
import '@/styles/globals.css';

type MyAppProps = {
  Component: React.ComponentType | any;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: MyAppProps) {
  if (Component.layout === `default`) {
    return (
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    );
  }

  return <Component {...pageProps} />;
}
