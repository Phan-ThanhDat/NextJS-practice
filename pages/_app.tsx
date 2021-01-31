import React from 'react';
import axios from 'axios';
import App from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import { Box, Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import theme from '../theme';
import {DataProvider} from '../store/GlobalState'
import NavBar from '../components/NavBar';

axios.defaults.baseURL = process.env.BASE_URL;
class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
      <DataProvider>
        <SWRConfig
              value={{ fetcher: (url: string) => axios(url).then(r => r.data) }}
            >
            <Container maxWidth={false}>
              <NavBar />
              <Box marginTop={2}>
                <Component {...pageProps} />
              </Box>
            </Container>
          </SWRConfig>
      </DataProvider>
          
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp