// pages/_app.js
import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import ThemeProvider from '@/theme';
import CssBaseline from '@mui/material/CssBaseline';


export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>AreHare - Leading Digital Solutions</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider>
        {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* Render the component */}
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
