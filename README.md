# React Starter Kit

To download the required dependecies run `yarn` from the root folder. The dev server can be started by `yarn start`

## Currently using

- React: 16.8
- Styled components: 4
- Storybook 5
- Webpack: 4
- Babel: 7
- Jest: 24
- ESLint: 5

## Scripts

- `start`: starts the dev server on [localhost:3000](http://localhost:3000)
- `build`: generates the static assets in the `./build` folder
- `test`: runs tests using the Jest test runner
- `flow`: runs the Flow type-checker
- `storybook`: starts the Storybook server

## Configuration

The `master` branch contains the basic setup of the kit. The other branches feature more specialised setups.

- `feature/redux`: Using Redux and Redux Thunk for state management

### Global ESLint configuration

The following plugins need to be installed globally:

- [babel-eslint](https://github.com/babel/babel-eslint#setup)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
