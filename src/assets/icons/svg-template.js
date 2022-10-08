const comments = `
// Auto-generated file created by svgr-cli source svg-template.js
// Run yarn icons:create to update
// Do not edit
`;

const template = (
  {imports, interfaces, componentName, props, jsx, exports},
  {tpl},
) => {
  const componentNameModified =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);
  return tpl`
${imports};
import {theme} from '../../styles';
${interfaces}
${comments}
const ${componentNameModified} = (${props}) => (
  ${jsx}
);
 
${exports};
`;
};

module.exports = template;
