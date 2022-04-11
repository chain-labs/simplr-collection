import Head from 'next/head';

import theme from 'styleguide/theme';

import 'styleguide/globalStyles.css';
import { ThemeProvider } from 'styled-components';
import Navbar from 'src/components/Navbar';
import { CLARITY_ID } from 'src/containers/home/components/constants';

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Simplr Collection</title>
				<meta name="keywords" content="Blockchain,NFT,Cryptocurrency,Simplr,SimplrCollection,Chainlabs" />
				<meta
					name="description"
					content="A simple, easy to use, no-code platform to create NFT smart contracts and launch your NFT projects without any hassle."
				/>
				<meta name="viewport" content="width=device-width,initial-scale=1.0" />
				<meta name="google-site-verification" content="BX0Vo3GESWeUxAbuYWlXYLiEksTkOtIuT_DDs_8Y6m4" />
				<link rel="shortcut icon" href="/favicon.png" />
				{CLARITY_ID && (
					<script
						type="text/javascript"
						dangerouslySetInnerHTML={{
							__html: `
						(function(c,l,a,r,i,t,y){
							c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
							t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
							y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
						})(window, document, "clarity", "script", ${CLARITY_ID});`,
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
