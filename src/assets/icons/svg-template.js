const comments = `
// Auto-generated file created by svgr-cli source svg-template.js
// Run yarn icons:create to update
// Do not edit
`;

const template = (
  {imports, interfaces, componentName, props, jsx, exports},
  {tpl},
) => {
  return tpl`
${imports};
${interfaces}
${comments}
const ${componentName} = (${props}) => (
  ${jsx}
);
 
${exports};
`;
};

module.exports = template;
