module.exports = api => {
  return {
    presets: [
      '@babel/env',
      [
        '@babel/preset-react',
        {
          // TEST: if this works
          development: api.env('development')
        }
      ],
      '@babel/preset-flow'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      'babel-plugin-styled-components'
    ]
  };
};
