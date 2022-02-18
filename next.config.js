module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push(
      {test: /\.(png|jpeg)$/, loader: 'url-loader?limit=8192'},
    )

    return config
  },
}
