/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')([]);
const withPlugins = require('next-compose-plugins');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ANALYZE = process.env.ANALYZE;

const nextConfig = {
	images: {
		domains: ['nftfy.mypinata.cloud'],
	},
};
module.exports = withPlugins([
	[
		withTM({
			webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
				if (ANALYZE) {
					config.plugins.push(
						new BundleAnalyzerPlugin({
							analyzerMode: 'server',
							analyzerPort: isServer ? 8888 : 8889,
							openAnalyzer: true,
						})
					);
				}
				config.module.rules.push({
					test: /\.(jpg|gif|svg|eot|ttf|woff|woff2)$/,
					use: ['@svgr/webpack'],
				});
				return config;
			},
			async rewrites() {
				return [
					{
						source: '/api/:path*',
						destination: 'https://simplr.mypinata.cloud/ipfs/:path*',
					},
					{
						source: '/',
						destination: '/landing.html',
					},
				];
			},
			generateETags: false,
		}),
	],
	nextConfig,
]);
