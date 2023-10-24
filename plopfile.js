module.exports = function (plop) {
  plop.setHelper('UpperCamelCase', (txt) => {
    return txt
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join('')
  })

  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/erabbit/src/{{name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'packages/erabbit/src/{{name}}/{{UpperCamelCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/erabbit/src/{{name}}/index.scss',
        templateFile: 'templates/index.scss.hbs',
      },
      {
        type: 'add',
        path: 'packages/erabbit/src/{{name}}/demo/index.vue',
        templateFile: 'templates/index.vue.hbs',
      },
      {
        type: 'add',
        path: 'packages/erabbit/src/{{name}}/__tests__/index.test.tsx',
        templateFile: 'templates/index.test.tsx.hbs',
      },
    ],
  })
}
