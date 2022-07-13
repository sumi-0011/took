module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@HOC': './src/HOC',
          '@hooks': './src/hooks',
          '@images': './src/images',
          '@navigations': './src/navigations',
          '@recoil': './src/recoil',
          '@screens': './src/screens',
          // NOTE : types 만 이렇게 해둔 이유는 뭐죵
          types: './src/types',
          '@utils': './src/utils',
          '@constants': './scr/constants',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
