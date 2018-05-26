module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parser": "babel-eslint",
  "rules": {
    "jsx-a11y/href-no-hash": [
      0
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
        ]
      }
    ],
    "import/extensions": [
      0
    ],
    "camelcase": [0],
    "no-underscore-dangle": 0,
    "react/prefer-stateless-function": 0,
    "global-require": 0,
    "no-use-before-define": 0,
    "import/prefer-default-export": [0],
  }
}