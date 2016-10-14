export default {
  presets: [
    require('babel-preset-es2015'),
    require('babel-preset-es2015-loose'),
    require('babel-preset-react')
  ],
  plugins: [
    require('babel-plugin-transform-object-rest-spread'),
    [require('babel-plugin-i18n-id-hashing'), {
      "varsContainingMessages": ["defaultMessages", "translations"]
    }],
    [required('babel-plugin-react-intl'), {
      "messagesDir": "./tmp/messages/",
      "enforceDescriptions": true
    }]
  ],
  env: {
    production: {
      plugins: [
        require('babel-plugin-transform-react-constant-elements')
      ]
    }
  }
};
