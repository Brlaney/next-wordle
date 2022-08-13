import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/styles/globals.scss';

/*
Keyboard onClick events:
- Select Letter  (case 1.)
- Select Enter   (case 2.)
- Select Back    (case 3.)
*/

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
};
