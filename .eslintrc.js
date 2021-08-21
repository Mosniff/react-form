module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    "default-case": 0,
    "max-len": ["error", {code: 200}],
    "no-fallthrough": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/label-has-associated-control": [ "error", {
      "controlComponents": ["Slider"],
      "depth": 1,
    }],
    "react/jsx-boolean-value": ['error', 'always'],
    "react/jsx-props-no-spreading": 0,
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": [
        "test/**/*",
        "**/*.stories.*",
        "**/*.test.*",
      ]}]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es2020: true,
    browser: true,
    node: true,
    jest: true
  },
};
