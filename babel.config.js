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
      ]
    ]
    // plugins: ['@babel/plugin-proposal-class-properties']
  };
};
