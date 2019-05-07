module.exports = api => {
  return {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-react',
        {
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
