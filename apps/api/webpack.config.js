module.exports = (options) => {
  return {
    ...options,
    resolve: {
      ...options.resolve,
      symlinks: false,
    },
    externals: [
      ({ request }, callback) => {
        if (!request) return callback()
        // Bundle workspace packages inline
        if (request.startsWith('@radar/')) return callback()
        // Externalize all other bare module specifiers
        if (!request.startsWith('.') && !request.startsWith('/')) {
          return callback(null, 'commonjs ' + request)
        }
        callback()
      },
    ],
  }
}
