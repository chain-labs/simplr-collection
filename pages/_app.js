import Head from 'next/head';

const MyApp = () => {
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
		</>
	);
};

export default MyApp;
