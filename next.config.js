module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    config.module.rules.push({
      test: /\.(png|jpg|gif|mp4)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.html$/i,
      loader: "html-loader",
    })

    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }  
        }
      ]
    })

    // Important: return the modified config
    return config
  },
}
