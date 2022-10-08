module.exports = {
  typescript: true,
  removeViewBox: false,
  native: true,
  icon: true,
  memo: true,
  ext: 'tsx',
  ignoreExisting: true,
  // replaceAttrValues: {
  //   white: '{props.fill || theme.colors.accent}',
  //   '#FFFFFF': '{props.fill || theme.colors.accent}',
  //   black: '{props.fill || theme.colors.accent}',
  //   '#111111': '{props.fill || theme.colors.accent}',
  //   '#000': '{props.fill || theme.colors.accent}',
  // },
  svgProps: {
    width: '{props.width || 256}',
    height: '{props.height || 256}',
  },
  template: require('./svg-template'),
  indexTemplate: require('./index-template'),
  outDir: './src/assets/icons',
};
