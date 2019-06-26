This repository is heavily linted to ensure maximum consistency across developer and engineer styles.

The linter that is used is based upon the [AirBnb JavaScript Styleguide](https://github.com/airbnb/javascript) and is very opinionated. There are some rules that don't necessarily work with what this solution is trying to accomplish so those are over-written in the `.eslintrc` file at the root of the repository. Those inclusions are below:

```json static
{
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "extends": "airbnb",
  "rules": {
    "react/forbid-prop-types": 0,
    "import/no-named-as-default": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "no-shadow": 0,
    "no-multi-str": 0
  }
}
```

All `**/*.jsx` and `**/*.js` files will be linted. All `**/*.spec.js` files will be ignored. Any JavaScript inside of `node_modules` is explicitly ignored and is not included in the linting work-flow.

Developer must run the `npm run eslint` command before committing & publishing his changes. As you run the command if there are any ESlint errors in the code those will pop-up in the terminal, developer should fix them one by one if there are multiple and check by running the command again once all the errors are resolved. You can also see these errors while coding with a red underline for ESlint errors, and a green underline for the Prettier errors. Prettier errors can be fixed by clicking on the helper bulb icon and selecting `fix all Prettier errors`. All ESlint errors must be resolved manually. Don't disable the linting until and unless it is an edge case. If you have to disable the linting just do it for that particular line, **Do Not disable the ESlint for whole page** 

However frustrating it is, the linter is designed to enforce and demand well-formed JavaScript from all those contributing to the repository.