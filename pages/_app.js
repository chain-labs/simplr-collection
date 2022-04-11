import { useEffect } from 'react';
import { debounce } from 'lodash';
import Head from 'next/head';

import theme from 'styleguide/theme';

import 'styleguide/globalStyles.css';
import { ThemeProvider } from 'styled-components';
import Navbar from 'src/components/Navbar';
import { toBoolean } from 'src/utils/toBoolean';

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Simplr Collection</title>
				<meta name="keywords" content="Blockchain,NFT,Cryptocurrency" />
				<link rel="shortcut icon" href="/favicon.png" />
				{toBoolean(process.env.NEXT_PUBLIC_PRODUCTION) && (
					<script
						type="text/javascript"
						dangerouslySetInnerHTML={{
							__html: `
						(function(c,l,a,r,i,t,y){
							c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
							t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
							y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
						})(window, document, "clarity", "script", "b6ih4vqkel");`,
						}}
					/>
				)}
			</Head>
			<ThemeProvider theme={theme}>
				<Navbar />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default MyApp;
