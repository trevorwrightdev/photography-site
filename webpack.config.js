var path = require('path')

module.exports = {

    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
    },
};