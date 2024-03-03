export default function (/** @type {import('plop').NodePlopAPI} */ plop) {
  const componentConfig = {
    description: 'Create a new component',
    prompts: [
      {
        type: 'list',
        name: 'componentType',
        message: 'Component type',
        choices: ['common', 'modules'],
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name',
      },
    ],
    actions: (data) => {
      if (!data) return [];

      const { componentType, componentName } = data;
      const componentPath = `src/components/${componentType}/${componentName}/`;
      return [
        {
          type: 'add',
          path: componentPath + '{{componentName}}.tsx',
          templateFile: 'plop-templates/component.tsx.hbs',
        },
        {
          type: 'add',
          path: componentPath + '{{componentName}}.stories.tsx',
          templateFile: 'plop-templates/component.stories.tsx.hbs',
        },
      ];
    },
  };

  plop.setGenerator('component', componentConfig);
}
