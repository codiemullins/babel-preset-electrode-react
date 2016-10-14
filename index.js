module.exports = {
  presets: [
    require('babel-preset-es2015'),
    require('babel-preset-es2015-loose'),
    require('babel-preset-react')
  ],
  plugins: [
    require('babel-plugin-transform-object-rest-spread'),
    [require('babel-plugin-i18n-id-hashing').default, {
      "varsContainingMessages": ["defaultMessages", "translations"]
    }],
    [require('babel-plugin-react-intl').default, {
      "messagesDir": "./tmp/messages/",
      "enforceDescriptions": true
    }]
  ],
  env: {
    production: {
      plugins: [
        require('babel-plugin-transform-react-constant-elements').default
      ]
    }
  }
};
