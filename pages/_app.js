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
				<meta
					name="keywords"
					content="nft, NFT, nft marketplace, what is nft, simple, nft launch, simple, launch nft, how to launch an nft, nft launchpad, nft metadata, nft smart contract, mint pass, simple nft art,nft kit, simplr, simplr collection, nft simplified "
				/>
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
				<script type="application/ld+json">{`{
					"@context": "https://schema.org/",
					"@type": "Organization",
					"name": "Simplr",
					"url": "https://simplrcollection.com/",
      				"logo": "https://drive.google.com/file/d/1P1yPwdvN28X8XJMM-N4ZWThI9rn3UlYy/view?usp=sharing",
					"description": "A simple, easy to use, no-code platform to create NFT smart contracts and launch your NFT projects without any hassle.",
					[
					{
						"@type": "Cryptography",
						"name": "Simplr Collection",
						"description": "A simple, easy to use, no-code platform to create NFT smart contracts and launch your NFT projects without any hassle.",
					},
					]

}

`}</script>
			</Head>
			<ThemeProvider theme={theme}>
				<Navbar />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default MyApp;
