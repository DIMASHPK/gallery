module.exports = ({ file, options, env }) => ({
  parser: false,
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'postcss-nested': {}
  },
});
