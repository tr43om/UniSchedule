module.exports = {
  typescript: true,
  removeViewBox: false,
  native: true,
  icon: true,
  memo: true,
  ext: 'tsx',
  ignoreExisting: true,
  replaceAttrValues: {
    white: '{props.fill || theme.colors.primary}',
    '#FFFFFF': '{props.fill || theme.colors.primary}',
    black: '{props.fill || theme.colors.primary}',
    '#111111': '{props.fill || theme.colors.primary}',
    '#000': '{props.fill || theme.colors.primary}',
  },
  svgProps: {
    width: '{props.width || 256}',
    height: '{props.height || 256}',
  },
  template: require('./svg-template'),
  indexTemplate: require('./index-template'),
  outDir: './src/assets/icons',
};
