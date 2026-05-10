const nodeExternals = require('webpack-node-externals')

module.exports = (options) => {
  return {
    ...options,
    externals: [
      nodeExternals({
        allowlist: [/^@radar\//],
      }),
    ],
  }
}
